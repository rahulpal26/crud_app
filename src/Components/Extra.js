import { Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Select from "react-select";


const AddSubscription = () => {

  const [Feature, SetFeature] = useState([{ featureName: "", featureValue: "" }])
  const [Price, SetPrice] = useState({ price: '' })
  const [PriceError, PriceSetError] = useState({})
  const [ImageErrors, SetImageErrors] = useState({ imgvalidate: '' })
  const [file, setFile] = useState();
  const [Cancel, SetCancel] = useState(false)



  const options = [
    { value: "Diamond", label: "Diamond" },
    { value: "Platinum", label: "Platinum" },
    { value: "Gold", label: "Gold" },
    { value: "Silver", label: "Silver" },
  ];

  const PriceChange = (e) => {
    SetPrice({ ...Price, [e.target.name]: e.target.value })
    if (Price) {
      PriceSetError({ price: '' })
    }

  }

  const imageChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
    SetImageErrors({ imgvalidate: '' })


  }

  const HandleSubmit = (e) => {
    e.preventDefault()

    if (!Price.price) {
      PriceSetError({ ...PriceError, price: "price is required." })

    } else if (Price.price == 0) {
      PriceSetError({ ...PriceError, price: "price can't be zero" })
    } else {
      PriceSetError({ ...PriceError, price: "" })
    }


    if (!file) {
      SetImageErrors({ ...ImageErrors, imgvalidate: "image is required " })

    } else if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      SetImageErrors({ ...ImageErrors, imgvalidate: "Unsuported Format " })
    } else {
      SetImageErrors({ ...ImageErrors, imgvalidate: "" })
    }

  }


  const addInput = () => {
    SetFeature(NewValue => {
      return [
        ...NewValue,
        {

          featureName2: "",
          featureValue2: ""
        }
      ];
    });
    SetCancel(true)
  };



  const DeleteInput = (i) => {
    const deletee = [...Feature]
    deletee.splice(i, 1)
    SetFeature(deletee)
  }



  return (
    <>
      <section className="userlist-area">
        <div className="heading-area">
          <h4>Add Subscription</h4>
        </div>
        <div className="collection_section">
          <div className="single-multiple-box">
            <Row className="crete-collect-new">
              <Col md={8}>
                <div className="collectible-box">
                  {/* new upload img */}
                  <div className="nft-upload-area">
                    <h6>Upload Image</h6>
                    <p>Drag or choose your file to upload</p>
                    <div className="ulpoad-image">
                      <i class="fa fa-upload" aria-hidden="true"></i>
                      <span>PNG, JPG, JPEG</span>

                      <h6 className="mt-2">Upload Image</h6>
                      <Form.Control
                        type="file"
                        className="uplage-image-collect"
                        onChange={imageChange}
                      />
                    </div>

                  </div>


                  <div className="name-description-filed">
                    <Form >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Subscription Type</Form.Label>
                        <Select options={options} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>price</Form.Label>
                        <Form.Control
                          min={1}
                          maxLength="25"
                          type="tel"
                          name="price"
                          onChange={PriceChange}
                          value={Price.price}
                          onKeyPress={(event) => {
                            if (!/[(0-9).]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          placeholder="Enter Price"
                        />
                        {PriceError.price && <p className="error">{PriceError.price}</p>}
                      </Form.Group>


                      {Feature.map((index) => {
                        return (<div className="feture-box">
                          <Row>
                            <Col md={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Feature Name</Form.Label>
                                <Form.Control
                                  maxLength="25"
                                  type="text"
                                  onChange={el => {
                                    let updatedFeature = Feature;
                                    updatedFeature[index] = { featureName: el.target.value, featureValue: updatedFeature[index].featureValue }
                                    SetFeature([...Feature])
                                  }}
                                  value={Feature.featureName}

                                  placeholder="Enter Feature Name"
                                />

                              </Form.Group>

                            </Col>
                            <Col md={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Feature Value</Form.Label>
                                <Form.Control

                                  min={0}
                                  onChange={el => {
                                    let updatedFeature = Feature;
                                    updatedFeature[index] = { 'featureName': updatedFeature[index].featureName, 'featureValue': el.target.value }
                                    SetFeature([...Feature])
                                  }}


                                  value={Feature.featureValue}
                                  maxLength="25"
                                  type="number"

                                  placeholder="Enter Feature Value"
                                />



                              </Form.Group>
                            </Col>
                          </Row>

                        </div>

                        )
                      })}
                      {Cancel ? <span className="delete" role="img" aria-label="x emoji" onClick={DeleteInput}>❌</span> : ''}

                      <div>
                        <span  ><i class="fa fa-plus-circle me-1" aria-hidden="true" onClick={addInput} ></i> Add More</span>
                      </div>

                      <div><Button type="submit" className='btn btn-secondary' onClick={HandleSubmit} >Submit</Button></div>

                    </Form>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="preview-area">
                  <h6 className="mb-2">Preview</h6>
                  <div className="preview-image">
                    <img
                      src={file ? URL.createObjectURL(file) : require("../../assets/images/empty.jpeg")}
                      alt="profile"
                    />
                    {ImageErrors.imgvalidate && <p className="error">{ImageErrors.imgvalidate}</p>}
                  </div>
                </div>
              </Col>

            </Row>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddSubscription;
