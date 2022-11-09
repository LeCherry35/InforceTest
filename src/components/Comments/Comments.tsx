import React, { useEffect } from 'react'
import { setCommentsAsync } from '../../async-actions/commentsAction'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface Props {
    id: number
}
const Comments: React.FC<Props> = ({id}) => {

  const dispatch = useTypedDispatch()
  const {comments} = useTypedSelector(state => state.comments)

  useEffect(() => {
    dispatch(setCommentsAsync())
  },[])
  useEffect(() => {
    console.log(comments);
    
  },[comments])
  return (
    
    <div>Comments</div>
  )
}

export default Comments