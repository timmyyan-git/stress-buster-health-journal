function RandomQuote ({onRandomQuote}){

    const {author, content} = onRandomQuote
    console.log(author)

    return (
        <div>
            <blockquote>&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
        </div>
    )
}

export default RandomQuote