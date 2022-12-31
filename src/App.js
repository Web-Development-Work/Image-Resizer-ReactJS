import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    
      <div class="wrapper">
        <div class="upload-box">
          <input type="file" accept="image/*" hidden />
          <img src="upload-icon.svg" alt="" />
          <p>Browse File to Upload</p>
        </div>
        <div class="content">
          <div class="row sizes">
            <div class="column width">
              <label>Width</label>
              <input type="number" />
            </div>
            <div class="column height">
              <label>Height</label>
              <input type="number" />
            </div>
          </div>
          <div class="row checkboxes">
            <div class="column ratio">
              <input type="checkbox" id="ratio" checked />
              <label for="ratio">Lock aspect ratio</label>
            </div>
            <div class="column quality">
              <input type="checkbox" id="quality" />
              <label for="quality">Reduce quality</label>
            </div>
          </div>
          <button class="download-btn">Download Image</button>
        </div>
      </div>

      <Helmet>
        <script type="text/javascript" src="./script.js"></script>
      </Helmet>

    </>
  );
}

export default App;
