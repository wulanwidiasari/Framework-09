import React from "react";
import List from "./List";

const Mahasiswa = (props) => {
    return (
        <div>
            <li className="list-group-item">
                <List title="NIM" value={props.nim} />
                <List title="Nama" value={props.nama} />
                <List title="Alamat" value={props.alamat} />
                <List title="No. Handphone" value={props.hp} />
                <List title="Angkatan" value={props.angkatan} />
                <List title="Status" value={props.status} />
                <center>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapus(props.nim)}>Hapus</button>
                </center>
            </li>
        </div>
    )
}

export default Mahasiswa;