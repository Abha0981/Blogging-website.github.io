import './write.css'

export default function Write() {
    return (
        <div className="write">
            <form className='writeform'>
                <div className='writeformgroup'>
                    <label htmlFor='fileinput'>
                        <i class="writeicon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileinput" style={{ display: "none" }}></input>
                    <input type='text' placeholder='Title' className='writeinput' autoFocus={true}></input>
                </div>
                <div className='writeformgroup'>
                    <textarea placeholder='Write your own Blog' type='text' className='writeinput'></textarea>
                </div>
                <button className='submit'>Publish</button>
            </form>
        </div>
    )
}