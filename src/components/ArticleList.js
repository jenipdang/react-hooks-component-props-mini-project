import Article from "./Article"

function ArticleList({ posts }) {
    const articleArr = posts.map((post) => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preiew={post.preview} minutes={post.minutes} />
        )
    })
    return <main>{articleArr}</main>
}

export default ArticleList;