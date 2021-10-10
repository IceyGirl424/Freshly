import './Search.css';

function Search() {
    return (
        <div id="SearchPage" style={{backgroundImage:"url(https://cdn.discordapp.com/attachments/893663423164989440/896574382498000916/image0.png)"}}>
            <div>
                <h3 className="SearchPageHeader">Freshly</h3>
            </div>
            <div>
                <label>Search:</label>
            </div>
            <form>
                <input type="text" name="SearchBar" className="SearchBarCSS"/>
            </form>
        </div>
    );
}

export default Search;