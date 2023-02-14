import { images } from "../../../assets/images"

const typeSelect = [
  {
    id: 1,
    type: "Giờ",
  },
  {
    id: 2,
    type: "Ngày",
  },
  {
    id: 3,
    type: "Tháng",
  },
  {
    id: 4,
    type: "Năm",
  },
  {
    id: 5,
    type: "Mệnh",
  },
  {
    id: 6,
    type: "Nhà",
  },
]

const typeSelectEn = [
  {
    id: 1,
    type: "Hour",
  },
  {
    id: 2,
    type: "Date",
  },
  {
    id: 3,
    type: "Month",
  },
  {
    id: 4,
    type: "Year",
  },
  {
    id: 5,
    type: "Destiny",
  },
  {
    id: 6,
    type: "House",
  },
]

const defaultHDMY = [
  {
    id: 1,
    value: "-H",
  },
  {
    id: 2,
    value: "-D",
  },
  {
    id: 3,
    value: "-M",
  },
  {
    id: 4,
    value: "-Y",
  },
  {
    id: 5,
    value: "+Y",
  },
  {
    id: 6,
    value: "+M",
  },
  {
    id: 7,
    value: "+D",
  },
  {
    id: 8,
    value: "+H",
  },
]

const defaultTableTypeEn = [
  {
    id: 1,
    type: "Qi Men Chart",
  },
  {
    id: 2,
    type: "Structures",
  },
]

const defaultTableType = [
  {
    id: 1,
    type: "Bảng kỳ môn",
  },
  {
    id: 2,
    type: "Bảng cách cục",
  },
]

const rightCol = [
  {
    id: 1,
    value: "1",
    type: true,
  },
  {
    id: 2,
    value: "3",
    type: false,
  },
  {
    id: 3,
    value: "1",
    type: false,
  },
  {
    id: 4,
    value: "3",
    type: true,
  },
]

const leftCol = [
  {
    id: 1,
    value: "D",
    icon: images.iconDays,
  },
  {
    id: 2,
    value: "H",
    icon: images.iconHours,
  },
  {
    id: 3,
    value: "M",
    icon: images.iconMonths,
  },
  {
    id: 4,
    value: "Y",
    icon: images.iconYears,
  },
]

const midCol = [
  {
    id: 1,
    value: "Quốc Ấn",
  },
  {
    id: 2,
    value: "Thiên Đức",
  },
  {
    id: 3,
    value: "Thái Âm",
  },
  {
    id: 4,
    value: "Envoy",
  },
]

const van = [
  {
    key: 7,
    value: "Vận 7 (Từ 1984 - 2003)",
  },
  {
    key: 8,
    value: "Vận 8 (Từ 2003 - 2023)",
  },
  {
    key: 9,
    value: "Vận 9 (Từ 2024 - 2043)",
  },
]

const vanEn = [
  {
    key: 7,
    value: "Period 7 (1984 - 2003)",
  },
  {
    key: 8,
    value: "Period 8 (2003 - 2023)",
  },
  {
    key: 9,
    value: "Period 9 (2024 - 2043)",
  },
]

const huong = [
  {
    key: "Nhâm",
    value: "Nhâm (337,5-352,5) - B1",
  },
  {
    key: "Tý",
    value: "Tý (352,5-7,5) - B2",
  },
  {
    key: "Quý",
    value: "Quý (7,5-22,5) - B3",
  },
  {
    key: "Sửu",
    value: "Sửu	(22,5-37,5) - ĐB1",
  },
  {
    key: "Cấn",
    value: "Cấn	(37.5-52,5) - ĐB2",
  },
  {
    key: "Dần",
    value: "Dần	(52,5-67,5) - ĐB3",
  },
  {
    key: "Giáp",
    value: "Giáp (67,5-82,5) - Đ1",
  },
  {
    key: "Mão",
    value: "Mão (82,5-97,5) - Đ2",
  },
  {
    key: "Ất",
    value: "Ất (97,5-112,5) - Đ3",
  },
  {
    key: "Thìn",
    value: "Thìn (112,5-127,5) - ĐN1",
  },
  {
    key: "Tốn",
    value: "Tốn (127,5-142,5) - ĐN2",
  },
  {
    key: "Tỵ",
    value: "Tỵ (142,5-157,5) - ĐN3",
  },
  {
    key: "Bính",
    value: "Bính (157,5-172,5) - N1",
  },
  {
    key: "Ngọ",
    value: "Ngọ	(172,5-187,5) - N2",
  },
  {
    key: "Đinh",
    value: "Đinh (187,5-202,5) - N3",
  },
  {
    key: "Mùi",
    value: "Mùi (202,5-217,5) - TN1",
  },
  {
    key: "Khôn",
    value: "Khôn (217,5-232,5) - TN2",
  },
  {
    key: "Thân",
    value: "Thân (232,5-247,5) - TN3",
  },
  {
    key: "Canh",
    value: "Canh (247,5-262,5) - T1",
  },
  {
    key: "Dậu",
    value: "Dậu	(262,5-277,5) - T2",
  },
  {
    key: "Tân",
    value: "Tân	(277,5-292,5) - T3",
  },
  {
    key: "Tuất",
    value: "Tuất (292,5,5-307,5) - TB1",
  },
  {
    key: "Càn",
    value: "Càn (307,5-322,5) - TB2",
  },
  {
    key: "Hợi",
    value: "Hợi	(322,5-337,5) - TB3",
  },
]

const huongEn = [
  {
    key: "Nhâm",
    value: "North 1 (337,5-352,5)",
  },
  {
    key: "Tý",
    value: "North 2 (352,5-7,5)",
  },
  {
    key: "Quý",
    value: "North 3 (7,5-22,5)",
  },
  {
    key: "Sửu",
    value: "Northeast 1 (22,5-37,5)",
  },
  {
    key: "Cấn",
    value: "Northeast 2 (37,5-52,5)",
  },
  {
    key: "Dần",
    value: "Northeast 3 (52,5-67,5)",
  },
  {
    key: "Giáp",
    value: "East 1 (67,5-82,5)",
  },
  {
    key: "Mão",
    value: "East 2 (82,5-97,5)",
  },
  {
    key: "Ất",
    value: "East 3 (97,5-112,5)",
  },
  {
    key: "Thìn",
    value: "South East 1 (112,5-127,5)",
  },
  {
    key: "Tốn",
    value: "South East 2 (127,5-142,5)",
  },
  {
    key: "Tỵ",
    value: "South East 3 (142,5-157,5)",
  },
  {
    key: "Bính",
    value: "South 1 (157,5-172,5)",
  },
  {
    key: "Ngọ",
    value: "South 2 (172,5-187,5)",
  },
  {
    key: "Đinh",
    value: "South 3 (187,5-202,5)",
  },
  {
    key: "Mùi",
    value: "Southwest 1 (202,5-217,5)",
  },
  {
    key: "Khôn",
    value: "Southwest 2 (217,5-232,5)",
  },
  {
    key: "Thân",
    value: "Southwest 3 (232,5-247,5)",
  },
  {
    key: "Canh",
    value: "West 1 (247,5-262,5)",
  },
  {
    key: "Dậu",
    value: "West 2 (262,5-277,5)",
  },
  {
    key: "Tân",
    value: "West 3 (277,5-292,5)",
  },
  {
    key: "Tuất",
    value: "Northwest 1 (292,5-307,5)",
  },
  {
    key: "Càn",
    value: "Northwest 2 (307,5-322,5)",
  },
  {
    key: "Hợi",
    value: "Northwest 3 (322,5-337,5)",
  },
]

export {
  typeSelect,
  typeSelectEn,
  defaultHDMY,
  defaultTableType,
  defaultTableTypeEn,
  rightCol,
  leftCol,
  midCol,
  van,
  vanEn,
  huong,
  huongEn,
}
