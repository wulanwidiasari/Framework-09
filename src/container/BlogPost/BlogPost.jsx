import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogSpot/Post";


// class BlogPost extends Component{
//     render(){
//         return(
//             <p>Blog Artikel</p>
//         )  
//     }
// }

// class BlogPost extends Component{
//     render(){
//         return(
//             <div class="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 <div class="artikel">
//                     <div class="gambar-artikel">
//                         <img src="http://placeimg.com/640/480/animals" alt="Gambar Tumbnail Artikel"></img>
//                     </div>
//                     <div class="konten-artikel">
//                         <div class="judul-artikel">Judul Artikel</div>
//                         <p class="isi-artikel">Isi Artikel</p>
//                     </div>
//                 </div>
//             </div>
//         )  
//     }
// }

// class BlogPost extends Component{
//     render(){
//         return(
//             <div class="post-artikel">
//             <h2>Daftar Artikel</h2>
//             <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Polteknik Negeri Malang"></Post>
//             </div>
//         )  
//     }
// }

class BlogPost extends Component{
    state ={                    // komponen state dari React untuk statefull component
        listArtikel: []         // variabel arrat yang digunakan untuk menyimpan data API
    }

    ambilDataDariServerAPI=()=>{
        fetch('http://localhost:3001/posts')        // alamat URL API yang ingin kita ambil datanya
        .then(response => response.json())          // ubah response data dari URL API mrnjadi sebuah data json
        .then(jsonHasilAmbilDariAPI => {            // data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
            this.setState({
                listArtikel:jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){                // komponen untuk mengecek ketika component telah di mount ing, maka panggil API
        this.ambilDataDariServerAPI()   // ambil data dari server API lokal
    }

    handleHapusArtikel = (data) =>{
        fetch('http://localhost:3001/posts/${data}', {method:'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }
    render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel =>{
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}
export default BlogPost;