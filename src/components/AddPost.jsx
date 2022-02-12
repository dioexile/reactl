import React, {useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'


export default function AddPost({create}) {

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <div className='newPost'>
      <form>
          <MyInput
            value = {post.title}
            onChange = {e => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder='Заголовок' 
          />
          <MyInput
            value = {post.body}
            onChange = {e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder='Описание' 
          />
          <MyButton onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    </div>
  )
}
