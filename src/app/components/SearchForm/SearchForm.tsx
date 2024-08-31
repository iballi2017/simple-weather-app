function SearchForm({ handleSearch, city, handleInputChange }: any) {
    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="flex">
                    <input type="text"
                        value={city}
                        onChange={handleInputChange} className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-yello-500 focus:border-yello-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yello-500 dark:focus:border-yello-500" placeholder="Enter city" />
                    <button type='submit' className="bg-[#FEE3BC] hover:bg-[#FEE3BC]/50 inline-flex items-center px-3 text-sm text-gray-900 border border-s-0 border-gray-300 rounded-e-md">
                        Search
                    </button>
                </div>
            </form>
        </>
    );
}

export default SearchForm;