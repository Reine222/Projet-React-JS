import '../styles/Banner.css'

function Banner() {
    const title = "la maison jungle";
    return (<div className='lmj-banner'>
        <h1>{title.toUpperCase()}</h1>
    </div>)
}

export default Banner;