

export const PostForm = ({name, startDate, handleInputChange, handleSubmitPost}) => {

    return (
        <form onSubmit={handleSubmitPost}>
            <input label="name" value={name} onChange={handleInputChange} />
            <label htmlFor="name">Plant Name</label>
            <input label="startDate" type="date" value={startDate} onChange={handleInputChange}/>
            <label htmlFor="startDate">Start Date</label>
        </form>

    )
}