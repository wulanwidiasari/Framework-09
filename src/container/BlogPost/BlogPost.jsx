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
    state ={
        listArtikel: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel:jsonHasilAmbilDariAPI
            })
        })
    }

    render(){
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel =>{
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}></Post>
                    })
                }
            </div>
        )
    }
}
export default BlogPost;