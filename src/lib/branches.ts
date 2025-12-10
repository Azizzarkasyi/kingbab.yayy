// Data cabang kingbab.yayy
export interface Branch {
  id: string;
  name: string;
  address: string;
  image: string;
}

export const branches: Branch[] = [
  {
    id: "unisa",
    name: "Cabang Unisa",
    address:
      "Jl. Pundung, Cambahan, Nogotirto, Kec. Gamping, Yogyakarta, Daerah Istimewa Yogyakarta 55592",
    image: "cabang 1 Unisa.jpg",
  },
  {
    id: "umy",
    name: "Cabang UMY",
    address:
      "Jl. Rajawali, Ngebel, Ambarketawang, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
    image: "cabang 2 Umy.jpg",
  },
  {
    id: "godean",
    name: "Cabang Godean",
    address:
      "Jl. Ngapak - Kentheng, Klajuran, Sidomoyo, Kec. Godean, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
    image: "cabang 3 Godean.jpg",
  },
];
