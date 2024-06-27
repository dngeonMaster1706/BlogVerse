import React, { useState } from 'react'

const CreatePosts = () => {
  const [title,setTitle]=useState('')
  const [category,setCategory]=useState('Uncategorized')
  const [description,setDescription]=useState()
  const [thumbImagee,setThumbImage]=useState()

  const postCategories=['Education','Engineering','Entertainment','Art','Muusic','Sports','Fashion']
  return (
    <section className='createPosts'>
      <div className='container createPosts-container'>
      <h2>Create Posts</h2>
          <form action="" className='form createPosts-form'>
              <p className='form-message'>Password or email invalid!</p>
              <input type="text" placeholder="Title" name="title" value={title} onChange={e=>setTitle(e.target.value)} autoFocus/>
              <select name='category' value={category}onChange={e=>setCategory(e.target.value)}>
                {
                  postCategories.map(cat=><option key={cat}>{cat}</option>)
                }
              </select>
            </form>
      </div>
    </section>
  )
}

export default CreatePosts
