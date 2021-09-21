
const stateDefault = {
    mangDatCuoc: [
        {ma:"keo",
        hinhAnh:"./images/keo.png",
        datCuoc: false,},
        {ma:"bua",
        hinhAnh:"./images/bua.png",
        datCuoc: true,},
        {ma:"bao",
        hinhAnh:"./images/bao.png",
        datCuoc: false,}
    ],
    ketQua: "Chuẩn bị chiến thôi !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer:
    {ma:"bua",
    hinhAnh:"./images/bua.png",
    },
}

const BaiTapOanTuXiReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            //Reset mảng cược
        let mangCuocUpdate = [...state.mangDatCuoc]; 
            // Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
        mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
            if(item.ma == action.maCuoc){
                return {...item, datCuoc: true}
            }
            return {...item,datCuoc: false}
        })
        //set state lại mảng cược => render lại giao diện
        state.mangDatCuoc = mangCuocUpdate;
        return {...state}
        }
        case 'RANDOM': {
            // console.log('ramdom',action)

            let soNgauNhien = Math.floor(Math.random() *3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]

            state.computer = quanCuocNgauNhien;
        return {...state} 
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computer = state.computer

            switch (player.ma) {
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hoà rồi !! Làm lại nè !!';
                    }
                    else if (computer.ma === "bua"){
                        state.ketQua = 'Thua rồi !! Làm lại nào !!';
                    }
                    else {
                        state.ketQua = 'Woaa !!! Thắng rồi !!';
                        state.soBanThang += 1;
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Woaa !!! Thắng rồi !!';
                        state.soBanThang += 1;
                    }
                    else if (computer.ma === "bua"){
                        state.ketQua = 'Hoà rồi !! Làm lại nè !!';
                    }
                    else {
                        state.ketQua = 'Thua rồi !! Làm lại nào !!';
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Thua rồi !! Làm lại nào !!';
                        }
                    else if (computer.ma === "bua"){
                        state.ketQua = 'Woaa !!! Thắng rồi !!';
                        state.soBanThang += 1;
                        }
                    else {
                        state.ketQua = 'Hoà rồi !! Làm lại nè !!';
                        }
                    break;
                    
                default: 
                state.ketQua = 'Woaa !!! Thắng rồi !!';
                state.soBanThang += 1;
            }
            
        }
        state.soBanChoi += 1;

        return {...state}
        default: return {...state}
    }
}
export default BaiTapOanTuXiReducer;