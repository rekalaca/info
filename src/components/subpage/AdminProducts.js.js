import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminProducts() {
  const path = "http://localhost:5555";
  const [data, setData] = useState([]);
  const [cat,setCat] = useState(0);
  const [nev,setNev] = useState('');
  const [desc,setDesc] = useState('');
  const [price,setPrice] = useState('');
  const [vat, setVat] = useState([]);
  const [image,setImage] = useState({})

  const fetchdata = async () => {
    const result = await axios.get(`${path}/products`);
    setData(result.data);
    setVat(vat.data);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    let formData = new FormData();
    formData.append("uploaded_file", image.data)
    formData.append("catID", cat)
    formData.append("name", nev)
    formData.append("description", desc)
    formData.append("vat_id", 1)
    formData.append("net_value", price)

    const result = await axios.put(`${path}/product`,formData)
    console.log(result)
  }

  const handleFile = (e) =>{
      const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0]
      }
    setImage(img)
      
  }
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);
  console.log(vat);

  return (
    <>
      <a href="/admin">
        <button type="button" class="btn btn-success szunet">
          Vissza az Admin felületre
        </button>
      </a>
      <br></br>
      <h1 className="h1users">Termékek kezelése</h1>
      <div className="row">
        <div className="col-6 upload">
          <h5 className="adminh5">Új termék rögzítése:</h5>
          <form onSubmit={handleSubmit}>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={e=>setCat(e.target.value)}
          >
            <option selected>Kategóriák:</option>
            <option value="1">Laptop</option>
            <option value="2">Asztali Pc</option>
            <option value="3">Router</option>
            <option value="4">Nyomtató</option>
            <option value="5">Kábel</option>
            <option value="6">Csatlakozó</option>
            <option value="7">Videókártya</option>
            <option value="8">Hangkártya</option>
            <option value="9">Jelerősítő</option>
            <option value="10">SSD meghajtó</option>
          </select>
          <br></br>
          <div class="mb-3">
            <label for="formFileSm" class="form-label">
              Termék képe:
            </label>
            <input
              class="form-control form-control-sm"
              id="formFileSm"
              type="file"
              name="uploaded_file"
              onChange={handleFile}
            />
          </div>
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="A termék neve:"
            aria-label=".form-control-sm example"
            onChange={e=>setNev(e.target.value)}
          ></input>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="A termék leírás:"
              rows="3"
              onChange={e=>setDesc(e.target.value)}
            ></textarea>
          </div>
          <input
            class="form-control form-control-sm bev"
            type="number"
            placeholder="A termék nettó ára:"
            aria-label=".form-control-sm example"
            onChange={e=>setPrice(e.target.valueAsNumber)}
          ></input>
          <button type="submit" class="btn btn-success adminbutton">
            Feltöltöm !
          </button>
          </form>
          
        </div>
      </div>
    </>
  );
}
