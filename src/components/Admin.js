function Admin() {

    return (

        <div className="kozep adminbackg">
            <h1 className="h1error adminhead">Adminisztrátori felület</h1>

            <div className="container">
                <div className="row menusk">
                    <div className="col-5 upload">
                        <h5 className="adminh5">Új termék rögzítése:</h5>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
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
                        </select><br></br>
                        <div class="mb-3">
                            <label for="formFileSm" class="form-label">Termék képe:</label>
                            <input class="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="A termék neve:" aria-label=".form-control-sm example"></input>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="A termék leírás:" rows="3"></textarea>
                        </div>
                        <input class="form-control form-control-sm bev" type="number" placeholder="A termék nettó ára:" aria-label=".form-control-sm example"></input>
                        <button type="button" class="btn btn-success adminbutton">Feltöltöm !</button>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5 upload">
                        
                        <a href="/adminusers"><button type="button" class="btn btn-warning szunet">Felhasználók lekérdezése</button></a><br></br>
                        <a href="/newusers"><button type="button" class="btn btn-warning szunet">Új felhasználó regisztrálása</button></a>
                    </div>

                </div>
                <div id="adatotkiir"></div>
                <div className="row menusk alsohezag">
                    <div className="col-5 upload">
                        <h5 className="adminh5">Számlázási adatok:</h5>
                        <input class="form-control form-control-sm bev" type="number" placeholder="User ID" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Felhasználónév" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Név" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Email cím" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Adószám" aria-label=".form-control-sm example" />
                        <button type="button" class="btn btn-info szunet">Lekérdezés</button>
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col-5 upload">
                        <h5 className="adminh5">Beszállítók:</h5>
                        <input class="form-control form-control-sm bev" type="number" placeholder="User ID" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Cégnév" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Cégjegyzékszám" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Adószám" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Cím" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Bankszámlaszám" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Email cím" aria-label=".form-control-sm example" />
                        <button type="button" class="btn btn-success szunet">Regisztrálom</button>
                        <button type="button" class="btn btn-danger szunet">Törlöm</button>
                        <button type="button" class="btn btn-warning szunet">Módosítom</button>
                        <button type="button" class="btn btn-info szunet">Lekérdezés</button>
                    </div>
                </div>
            </div>

        </div>




    )
};

export default Admin;