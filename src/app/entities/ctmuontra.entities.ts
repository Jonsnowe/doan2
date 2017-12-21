import { Sach } from "./sach.entities";

export interface CTMuonTra{
        STT: string,
        IDSach: String,
        IDDocGia: String,
        NgayMuon: string,
        NgayTraQuyDinh:string,
        NgayTraThucTe: string,
        NgayQuaHan: number,
        TinhTrangMuon: number,
        SoLuongThue: number,
        TriGia: number,
        TienCoc: number,
        TienThue: number,
        TienPhat: number,
        TongTien: number,
        sach:Sach

}