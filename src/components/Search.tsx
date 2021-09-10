interface Props  {
    setUsersName(arg: string): void;
}

const Search:React.FC<Props> = ({setUsersName}) => {
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
       let grabName = e.target.value;
       setUsersName(grabName)
    }

    return (
        <form>
            <label htmlFor="usersName">Enter your name</label>
            <input onChange={handleInput} type="text" name="usersName" id="usersName" />
        </form>
    )
}

export default Search
