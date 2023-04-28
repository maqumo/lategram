import "../Style/Photoupload.css";
const Photoupload=()=>{
return(<>
<div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form >

      <div class="mb-6 pt-4">
        <label class="formbold-form-label formbold-form-label-2">
          Upload File
        </label>

        <div class="formbold-mb-5 formbold-file-input">
          <input type="file" name="file" id="file" />
          <label for="file">
            <div>
              
            </div>
          </label>
        </div>
        </div>

          

      <div>
        <button class="formbold-btn w-full">Send File</button>
      </div>
    </form>
  </div>
</div>
</>)
}
export default Photoupload;