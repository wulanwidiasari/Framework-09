import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogSpot/Post";
import API from "../../services";

class BlogPost extends Component {
    state = {                    // komponen state dari React untuk statefull component
        listArtikel: [],         // variabel arrat yang digunakan untuk menyimpan data API
        insertArtikel: [],
        userId: 1,
        id: 1,
        title: "",
        body: ""
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount() {                // komponen untuk mengecek ketika component telah di mount ing, maka panggil API
        this.ambilDataDariServerAPI()   // ambil data dari server API lokal
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data).then((response) =>{
            this.ambilDataDariServerAPI();
        })
    }
    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-buttom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }
}
export default BlogPost;