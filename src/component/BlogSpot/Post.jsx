import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="https://cdn0-production-images-kly.akamaized.net/ZOhFjJv-FHfjXSFpNBkv8n_fOKw=/1231x710/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3048702/original/088305400_1581510835-20200212-Indonesia-Fashion-Week-9.jpg" alt="Gambar Tumbnail Artikel"></img>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;