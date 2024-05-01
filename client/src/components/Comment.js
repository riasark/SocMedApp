
function Comment(props) {
    return (
        <div className={`rounded-bl-lg border-b border-l p-2 mx-2 inline-block`}>
            <p className="text-sm leading-5	text-[#6b7280]">{props.comment}</p> 
        </div>
    )
}

export default Comment;