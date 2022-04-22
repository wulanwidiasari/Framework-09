import React, { Component } from "react";
import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";

class ListMahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: "",
            time:""
        },
    };


    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }


    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: "DELETE" })
            .then(
                (res) => this.ambilDataDariServerAPI()
            );
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        formInsertMahasiswa['id'] = formInsertMahasiswa.nim
        // formInsertMahasiswa['time']=new Date()
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        return (
            <>
                <div className='row g-3'>
                    <center>
                        <h3>Form Input Mahasiswa</h3>
                    </center>
                    <div className="card">
                        <div className="card-body">
                            <div className='col-md-12'>
                                <label htmlFor='nim' className='form-label'>NIM</label>
                                <input type='number' className='form-control' id='nim' name='nim' onChange={this.handleTambahMahasiswa} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='nama' className='form-label'>Nama</label>
                                <input type='text' className='form-control' id='nama' name='nama' onChange={this.handleTambahMahasiswa} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='alamat' className='form-label'>Alamat</label>
                                <textarea className='form-control' id='alamat' name='alamat' onChange={this.handleTambahMahasiswa}></textarea>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='hp' className='form-label'>No. Handphone</label>
                                <input type='text' className='form-control' id='hp' name='hp' onChange={this.handleTambahMahasiswa} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='angkatan' className='form-label'>Angkatan</label>
                                <input type='number' className='form-control' id='angkatan' name='angkatan' onChange={this.handleTambahMahasiswa} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='status' className='form-label'>Status</label>
                                <select id='status' name='status' className='form-select' onChange={this.handleTambahMahasiswa} defaultValue='{DEFAULT}'>
                                    <option value="DEFAULT">Choose...</option>
                                    <option value='Aktif'>Aktif</option>
                                    <option value='Cuti'>Cuti</option>
                                    <option value='Lulus'>Lulus</option>
                                </select>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='time' className='form-label'>Time</label>
                                <input type='date' className='form-control' id='time' name='time' onChange={this.handleTambahMahasiswa} />
                            </div>
                            <div>
                                <br />
                                <center>
                                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <center>
                    <h3>Data Mahasiswa</h3>
                </center>
                <div className='row g-3'>
                    {
                        this.state.listMahasiswa.map(mahasiswa => {
                            return <Mahasiswa
                                nim={mahasiswa.nim}
                                nama={mahasiswa.nama}
                                alamat={mahasiswa.alamat}
                                hp={mahasiswa.hp}
                                angkatan={mahasiswa.angkatan}
                                status={mahasiswa.status}
                                time={mahasiswa.time}
                                hapus={this.handleHapusMahasiswa} />
                        })
                    }
                </div>
            </>
        )
    }
}
export default ListMahasiswa;