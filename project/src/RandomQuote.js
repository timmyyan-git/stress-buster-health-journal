function RandomQuote ({onRandomQuote}){
console.log(onRandomQuote)
    const {author, content} = onRandomQuote
//     console.log(author)

    return (
        <div id="quote">
            <blockquote>&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
        </div>
    )
}

export default RandomQuote