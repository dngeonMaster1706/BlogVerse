import React, { useState } from 'react'

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {

  const [title,setTitle]=useState('')
  const [category,setCategory]=useState('Uncategorized')
  const [description,setDescription]=useState()
  const [thumbImage,setThumbImage]=useState()

  const postCategories=['Education','Engineering','Entertainment','Art','Muusic','Sports','Fashion']
  //Modules
  const modules={
    toolbar:[
      [{'header' : [1,2,3,4,5,6,false]}],
      ['bold','italic','underline','strike','blockquote'],
      [
        {'list':'ordered'},
        {'list':'bullet'},
        {'indent':'+1'},
        {'indent':'-1'}
      ],
      ['link','image'],
      ['clean']
    ]
  }

  //Formatss
  const formats=[
    'header',
    'bold','italic','underline','strike','blockquote',
    'list','bullet','indent',
    'link','image'
  ]
  return (
    

    <section className='editPosts'>
            <div className='container form-container eidtPost-container'>
              <h2>Edit Posts</h2>
          <form action="" className='form editPost-form'>
              <p className='form-message'>Password or email invalid!</p>
              <input type="text" placeholder="Title" name="title" value={title} onChange={e=>setTitle(e.target.value)} autoFocus/>
              <select name='category' value={category}onChange={e=>setCategory(e.target.value)}>
                {
                  postCategories.map(cat=><option key={cat}>{cat}</option>)
                }
              </select>
                  <ReactQuill modules={modules} formats={formats} value={description} onChange={e=>setDescription(e.target.value)} className='qL-editor'/>
              <input type="file"  value={thumbImage} onChange={e=>setThumbImage(e.target.value)} autoFocus accept='png,jpg,jpeg'/>
              <button type='submit' className='btn btn-primary'>Update</button>
            </form>
      </div>
    </section>
  )
}

export default EditPost
