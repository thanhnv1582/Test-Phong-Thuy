import { Dimensions } from "react-native"
import { images } from "../../assets/images"

const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height
const defaultDuongLich = "DL"
const defaultDirection = ["Đông", "Đông Nam", "Nam", "Tây Nam", "Tây", "Tây Bắc", "Bắc", "Đông Bắc"]
const dayOftheWeekInVie = [
  {
    id: 1,
    value: "CN",
    fullText: "Chủ nhật",
  },
  {
    id: 2,
    value: "Hai",
    fullText: "Thứ hai",
  },
  {
    id: 3,
    value: "Ba",
    fullText: "Thứ ba",
  },
  {
    id: 4,
    value: "Tư",
    fullText: "Thứ tư",
  },
  {
    id: 5,
    value: "Năm",
    fullText: "Thứ năm",
  },
  {
    id: 6,
    value: "Sáu",
    fullText: "Thứ sáu",
  },
  {
    id: 7,
    value: "Bảy",
    fullText: "Thứ bảy",
  },
]
const calendarDefaultTheme = {
  palette: {
    primary: {
      main: "#D4190A",
      contrastText: "#fff",
    },
    gray: {
      //   "100": "#333",
      //   "200": "#666",
      //   "300": "#888",
      //   "500": "#aaa",
      //   "800": "#ccc",
    },
    typography: {
      fontFamily: "Arial",
    },
  },
}

const dumpData = [
  {
    id: 1,
    value: "Thiên Độn",
    direction: "ĐB",
    type: 1,
  },
  {
    id: 2,
    value: "Quỷ độn",
    direction: "B",
    type: 2,
  },
  {
    id: 3,
    value: "Hổ Độn",
    direction: "TN",
    type: 1,
  },
  {
    id: 4,
    value: "Thanh long hồi thủ",
    direction: "ĐN",
    type: 1,
  },
  {
    id: 5,
    value: "Quỷ giả",
    direction: "TB",
    type: 2,
  },
]

const compasses = [
  {
    name: "Phi tinh 2",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 3",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 4",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 5",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 6",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 7",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 8",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 9",
    src: images.compassTest,
  },
  {
    name: "Phi tinh 10",
    src: images.compassTest,
  },
]

const kymonTableType = ["Kỳ môn chiến lược", "Kỳ môn 64 quẻ"]

const kymonTableList = [
  {
    key: "gio",
    value: "Giờ",
  },
  {
    key: "ngay",
    value: "Ngày",
  },
]

const kymonTableListEn = [
  {
    key: "gio",
    value: "Hour",
  },
  {
    key: "ngay",
    value: "Date",
  },
]

const huongList = [
  {
    key: "0",
    value: "---",
  },
  {
    key: "1",
    value: "Bắc",
  },
  {
    key: "2",
    value: "Tây Nam",
  },
  {
    key: "3",
    value: "Đông",
  },
  {
    key: "4",
    value: "Đông Nam",
  },
  {
    key: "6",
    value: "Tây Bắc",
  },
  {
    key: "7",
    value: "Tây",
  },
  {
    key: "8",
    value: "Đông Bắc",
  },
  {
    key: "9",
    value: "Nam",
  },
]

const huongListEn = [
  {
    key: "0",
    value: "---",
  },
  {
    key: "1",
    value: "N",
  },
  {
    key: "2",
    value: "SW",
  },
  {
    key: "3",
    value: "E",
  },
  {
    key: "4",
    value: "SE",
  },
  {
    key: "6",
    value: "NW",
  },
  {
    key: "7",
    value: "W",
  },
  {
    key: "8",
    value: "NE",
  },
  {
    key: "9",
    value: "S",
  },
]

const yesNo = [
  {
    key: "0",
    value: "---",
  },
  {
    key: "1",
    value: "Có",
  },
  {
    key: "2",
    value: "Không",
  },
]

const yesNoEn = [
  {
    key: "0",
    value: "---",
  },
  {
    key: "1",
    value: "Yes",
  },
  {
    key: "2",
    value: "No",
  },
]

const a1A2ListEn = [
  {
    key: "0",
    value: "---",
  },
  { key: "Giáp", value: "Jia" },
  { key: "Ất", value: "Yi" },
  { key: "Bính", value: "Bing" },
  { key: "Đinh", value: "Ding" },
  { key: "Mậu", value: "Wu" },
  { key: "Kỷ", value: "Ji" },
  { key: "Canh", value: "Geng" },
  { key: "Tân", value: "Xin" },
  { key: "Nhâm", value: "Ren" },
  { key: "Quý", value: "Gui" },
]

const a1A2List = [
  {
    key: "0",
    value: "---",
  },
  { key: "Giáp", value: "Giáp" },
  { key: "Ất", value: "Ất" },
  { key: "Bính", value: "Bính" },
  { key: "Đinh", value: "Đinh" },
  { key: "Mậu", value: "Mậu" },
  { key: "Kỷ", value: "Kỷ" },
  { key: "Canh", value: "Canh" },
  { key: "Tân", value: "Tân" },
  { key: "Nhâm", value: "Nhâm" },
  { key: "Quý", value: "Quý" },
]

const a3List = [
  {
    key: "0",
    value: "---",
  },
  { key: "Bồng", value: "Bồng" },
  { key: "Nhuế", value: "Nhuế" },
  { key: "Xung", value: "Xung" },
  { key: "Phò", value: "Phò" },
  { key: "Cầm", value: "Cầm" },
  { key: "Tâm", value: "Tâm" },
  { key: "Trụ", value: "Trụ" },
  { key: "Nhậm", value: "Nhậm" },
  { key: "Anh", value: "Anh" },
]

const a3ListEn = [
  {
    key: "0",
    value: "---",
  },
  { key: "Bồng", value: "Grass" },
  { key: "Nhuế", value: "Grain" },
  { key: "Xung", value: "Destructor" },
  { key: "Phò", value: "Assistant" },
  { key: "Cầm", value: "Bird" },
  { key: "Tâm", value: "Heart" },
  { key: "Trụ", value: "Pillar" },
  { key: "Nhậm", value: "Ambassador" },
  { key: "Anh", value: "Hero" },
]

const a4List = [
  {
    key: "0",
    value: "---",
  },
  { key: "Trực Phù", value: "Trực Phù" },
  { key: "Đằng Xà", value: "Đằng Xà" },
  { key: "Thái Âm", value: "Thái Âm" },
  { key: "Lục Hợp", value: "Lục Hợp" },
  { key: "Câu Trận", value: "Câu Trận" },
  { key: "Huyền Vũ", value: "Huyền Vũ" },
  { key: "Chu Tước", value: "Chu Tước" },
  { key: "Bạch Hổ", value: "Bạch Hổ" },
  { key: "Cửu Địa", value: "Cửu Địa" },
  { key: "Cửu Thiên", value: "Cửu Thiên" },
]

const a4ListEn = [
  {
    key: "0",
    value: "---",
  },
  { key: "Trực Phù", value: "Chief" },
  { key: "Đằng Xà", value: "Snake" },
  { key: "Thái Âm", value: "Moon" },
  { key: "Lục Hợp", value: "Harmony" },
  { key: "Câu Trận", value: "Hook" },
  { key: "Huyền Vũ", value: "Tortoise" },
  { key: "Chu Tước", value: "Phoenix" },
  { key: "Bạch Hổ", value: "Tiger" },
  { key: "Cửu Địa", value: "Earth" },
  { key: "Cửu Thiên", value: "Heaven" },
]

const a5List = [
  {
    key: "0",
    value: "---",
  },
  { key: "Khai", value: "Khai" },
  { key: "Hưu", value: "Hưu" },
  { key: "Sinh", value: "Sinh" },
  { key: "Thương", value: "Thương" },
  { key: "Đỗ", value: "Đỗ" },
  { key: "Cảnh", value: "Cảnh" },
  { key: "Tử", value: "Tử" },
  { key: "Kinh", value: "Kinh" },
]

const a5ListEn = [
  {
    key: "0",
    value: "---",
  },
  { key: "Khai", value: "Open" },
  { key: "Hưu", value: "Rest" },
  { key: "Sinh", value: "Life" },
  { key: "Thương", value: "Harm" },
  { key: "Đỗ", value: "Delusion" },
  { key: "Cảnh", value: "Scenery" },
  { key: "Tử", value: "Death" },
  { key: "Kinh", value: "Fear" },
]

const soList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const cachCucDoList = [
  {
    key: "0",
    value: "---",
  },
  { key: "Thanh long hồi thủ", value: "Thanh long hồi thủ" },
  { key: "Phi điểu diệc huyệt", value: "Phi điểu diệc huyệt" },
  { key: "Ngọc nữ thủ môn", value: "Ngọc nữ thủ môn" },
  { key: "Kỳ nghi tương hợp", value: "Kỳ nghi tương hợp" },
  { key: "Thiên độn", value: "Thiên độn" },
  { key: "Phong độn", value: "Phong độn" },
  { key: "Vân độn", value: "Vân độn" },
  { key: "Quỷ độn", value: "Quỷ độn" },
  { key: "Thần độn", value: "Thần độn" },
  { key: "Long độn", value: "Long độn" },
  { key: "Hổ độn", value: "Hổ độn" },
  { key: "Nhật sứ", value: "Nhật sứ" },
  { key: "Nguyệt sứ", value: "Nguyệt sứ" },
  { key: "Tinh sứ", value: "Tinh sứ" },
  { key: "Nhật thăng", value: "Nhật thăng" },
  { key: "Nguyệt thăng", value: "Nguyệt thăng" },
  { key: "Tinh thăng", value: "Tinh thăng" },
  { key: "Nhật vượng", value: "Nhật vượng" },
  { key: "Nguyệt vượng", value: "Nguyệt vượng" },
  { key: "Tinh vượng", value: "Tinh vượng" },
  { key: "Chân trá", value: "Chân trá" },
  { key: "Trùng trá", value: "Trùng trá" },
  { key: "Tu trá", value: "Tu trá" },
  { key: "Thiên giả", value: "Thiên giả" },
  { key: "Địa giả", value: "Địa giả" },
  { key: "Nhân Giả", value: "Nhân Giả" },
  { key: "Thần Giả", value: "Thần Giả" },
  { key: "Quỷ Giả", value: "Quỷ Giả" },
  { key: "Tướng tả 1", value: "Tướng tả 1" },
  { key: "Tướng tả 2", value: "Tướng tả 2" },
  { key: "Tướng tả 3", value: "Tướng tả 3" },
]

const cachCucDoListEn = [
  {
    key: "0",
    value: "---",
  },
  { key: "Thanh long hồi thủ", value: "Green Dragon Returns" },
  { key: "Phi điểu diệc huyệt", value: "Flying Bird Fall into Cave" },
  { key: "Ngọc nữ thủ môn", value: "Jade Maiden Watching the Door" },
  { key: "Kỳ nghi tương hợp", value: "Harmony of Noble and Crest" },
  { key: "Thiên độn", value: "Heavenly Dun" },
  { key: "Phong độn", value: "Wind Dun" },
  { key: "Vân độn", value: "CLoud Dun" },
  { key: "Quỷ độn", value: "Ghost Dun" },
  { key: "Thần độn", value: "Deity Dun" },
  { key: "Long độn", value: "Dragon Dun" },
  { key: "Hổ độn", value: "Tiger Dun" },
  { key: "Nhật sứ", value: "Yi Noble Receives Envoy" },
  { key: "Nguyệt sứ", value: "Bing Noble Receives Envoy" },
  { key: "Tinh sứ", value: "Ding Noble Receives Envoy" },
  { key: "Nhật thăng", value: "Yi Noble Rising Palace" },
  { key: "Nguyệt thăng", value: "Bing Noble Rising Palace" },
  { key: "Tinh thăng", value: "Ding Noble Rising Palace" },
  { key: "Nhật vượng", value: "Sun Prosperity" },
  { key: "Nguyệt vượng", value: "Moon Prosperity" },
  { key: "Tinh vượng", value: "Star Prosperity" },
  { key: "Chân trá", value: "Real Deception" },
  { key: "Trùng trá", value: "Double Deception" },
  { key: "Tu trá", value: "Nobility Deception" },
  { key: "Thiên giả", value: "Heavenly Fake" },
  { key: "Địa giả", value: "Earthly Fake" },
  { key: "Nhân Giả", value: "Man Fake" },
  { key: "Thần Giả", value: "Deity Fake" },
  { key: "Quỷ Giả", value: "Ghost Fake" },
  { key: "Tướng tả 1", value: "Supper Asissting 1" },
  { key: "Tướng tả 2", value: "Supper Asissting 2" },
  { key: "Tướng tả 3", value: "Supper Asissting 3" },
]

export {
  WIDTH,
  HEIGHT,
  defaultDuongLich,
  defaultDirection,
  calendarDefaultTheme,
  dayOftheWeekInVie,
  dumpData,
  compasses,
  kymonTableType,
  kymonTableList,
  huongList,
  cachCucDoList,
  a1A2List,
  a1A2ListEn,
  a3List,
  a3ListEn,
  a4List,
  a4ListEn,
  a5List,
  a5ListEn,
  yesNo,
  soList,
  cachCucDoListEn,
  yesNoEn,
  huongListEn,
  kymonTableListEn,
}
