function RandomQuote ({onRandomQuote}){
    const {author, content} = onRandomQuote


    return (
        <div id="quote">
            <blockquote>&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
        </div>
    )
}

export default RandomQuote
