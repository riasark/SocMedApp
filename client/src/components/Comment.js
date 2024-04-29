
function Comment(props) {
    return (
        <div class={`rounded-bl-lg border-b border-l p-2 mx-2 inline-block`}>
            <p class="text-sm leading-5	text-[#6b7280]">{props.comment}</p> 
        </div>
    )
}

export default Comment;