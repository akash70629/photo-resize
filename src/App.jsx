import Resizer from "@meghoshpritam/react-image-file-resizer";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import TitleTooltip from "./Components/TitleTooltip";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 1920,
      height: 1080,
      resolution: 72,
      format: "JPG",
      quality: 90,
      lockAspectRatio: true,
      image: null,
      resizedImage: "",
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }



  handleWidthChange(event) {
    const newWidth = parseInt(event.target.value);
    this.setState((prevState) => ({
      width: newWidth,
      height: prevState.lockAspectRatio ? newWidth : prevState.height,
    }));
  }

  handleHeightChange(event) {
    const newHeight = parseInt(event.target.value);
    this.setState((prevState) => ({
      height: newHeight,
      width: prevState.lockAspectRatio ? newHeight : prevState.width,
    }));
  }

  fileChangedHandler(event) {
    const file = event.target.files[0];
    if (file) {
      this.setState({ image: file });
    }
  }

  handleResize() {
    if (this.state.image) {
      try {
        console.log("Quality:", this.state.quality);

        Resizer.imageFileResizer({
          file: this.state.image,
          maxWidth: this.state.width,
          maxHeight: this.state.height,
          compressFormat: this.state.format,
          quality: this.state.quality,
          rotation: 0,
          keepAspectRatio: this.state.lockAspectRatio,
          responseUriFunc: (uri) => {
            this.setState({ resizedImage: uri });
          },
          outputType: "base64",
          minWidth: this.state.width,
          minHeight: this.state.height,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  handleDownload() {
    if (this.state.resizedImage) {
      const link = document.createElement("a");
      link.href = this.state.resizedImage;
      link.download = `New_resized_image.${this.state.format.toLowerCase()}`;
      link.click();
    }
  }



  render() {
    return (

      <Router>

        <div className="container">
          {/* Uploader Section */}


          <div className="uploader">
            <h2 className="heading">Resize an Image</h2>


            <div className="dropArea">
              {this.state.image ? (

                <div className="selectedImageContainer">
                  <img
                    src={URL.createObjectURL(this.state.image)}
                    alt="Selected Image"
                    className="selectedImage" />

                  <br />

                  <button
                    className="removeImageButton btn btn-primary"
                    onClick={() => this.setState({ image: null, resizedImage: "" })}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.fileChangedHandler}
                    className="fileInput"
                  />
                  <div className="uploadMessage">
                    <p>Drop your images here or <span className="browseText">browse</span>.</p>
                    <button className="selectImageButton">Select Image</button>
                  </div>
                </>
              )}
            </div>
          </div>


          {/* Resize Controls Section */}
          {this.state.image ? (
            <div className="controls">
              <h2 className="heading">Choose new size and format</h2>
              <br />
              <div className="row">
                <div className="inputGroup">
                  <label style={{ fontWeight: "bold" }}>Width</label>
                  <input
                    type="number"
                    min={1}
                    value={this.state.width}
                    onChange={this.handleWidthChange}
                    className="input"
                  />
                </div>

                <div className="inputGroup">
                  <label style={{ fontWeight: "bold" }}>Height</label>
                  <input
                    type="number"
                    min={1}
                    value={this.state.height}
                    onChange={this.handleHeightChange}
                    className="input"
                  />
                </div>
                <div className="inputGroup">
                  <label style={{ fontWeight: "bold" }}>Unit of Length</label>
                  <select className="select" defaultValue="pixels">
                    <option value="percent">Percent</option>
                    <option value="pixels">Pixels</option>
                    <option value="centimeters">Centimeters</option>
                    <option value="inches">Inches</option>
                  </select>
                </div>

                <button
                  className="lockButton"
                  onClick={() => this.setState({ lockAspectRatio: !this.state.lockAspectRatio })}
                >
                  {this.state.lockAspectRatio ? (
                    <img src="https://www.reduceimages.com/img/closed-lock.svg" alt="Lock" />
                  ) : (
                    <img src="https://www.reduceimages.com/img/open-lock.svg" alt="Unlock" />
                  )}
                </button>
                <TitleTooltip />
              </div>

              <div className="row">
                <div className="inputGroup">
                  <label style={{ fontWeight: "bold" }}>Resolution (dpi)</label>
                  <input
                    type="number"
                    min={1}
                    value={this.state.resolution}
                    onChange={(e) => this.setState({ resolution: parseInt(e.target.value) })}
                    className="input"
                  />
                </div>
                <div className="inputGroup">
                  <label style={{ fontWeight: "bold" }}>Format</label>
                  <select className="format-style"
                    value={this.state.format}
                    onChange={(e) => this.setState({ format: e.target.value })}

                  >
                    <option value="JPG">JPG</option>
                    <option value="PNG">PNG</option>
                    <option value="JPEG">JPEG</option>
                    <option value="GIF">GIF</option>
                    <option value="TIFF">TIFF</option>
                    <option value="SVG">SVG</option>
                  </select>
                </div>

                {/* Don't know why Quality is not working  👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼*/}

                {/* <div className="inputGroup">
                  <label style={{ fontWeight: "bold" }}>Quality</label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={this.state.quality}
                    onChange={(e) => this.setState({ quality: parseInt(e.target.value) })}
                    className="input"
                  />
                </div> */}




                {/* image compress input field , change this as needed  👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼*/}


                {/* <div >
                  <label style={{ fontWeight: "bold" }}>File Size</label>
                  <input type="number" />
                  <select className="format-style">
                    <option value="Mb">mb</option>
                    <option value="Kb">kb</option>
                  </select>
                </div> */}


              </div>
              <button className="button" onClick={this.handleResize}>
                Resize Image
              </button>

              {this.state.resizedImage && (
                <div>
                  <h3>Resized Image Preview</h3>
                  <img
                    src={this.state.resizedImage}
                    alt="Resized Preview"
                    className="previewImage" />
                  <br />
                  <button className="button" onClick={this.handleDownload}>
                    Download Image
                  </button>
                </div>
              )}
            </div>
          ) : (<h3>Smile Please 😁🌸</h3>)}



          {/* Footer Section  */}

          <Routes>
            <Route path="/" element={<Footer />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route path="About" element={<About />} />
            <Route path="Features" element={<Features />} />
          </Routes>


        </div >
      </Router>
    );
  }
}

export default App;
