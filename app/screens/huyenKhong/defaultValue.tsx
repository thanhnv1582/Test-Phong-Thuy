const defaultTableTypeEn = [
  {
    id: 1,
    type: "Qi Men Mysterious",
  },
  {
    id: 2,
    type: "Structures",
  },
]

const defaultTableType = [
  {
    id: 1,
    type: "Bảng huyền không",
  },
  {
    id: 2,
    type: "Bảng cách cục",
  },
]

const cachCuc = {
  "1-1":
    "Đại diện cho những sự gặp gỡ, những việc liên quan đến tình cảm. Khả năng gây ra nghiện rượu, đặc biệt ở đàn ông. Đây cũng được coi là cách cục đào hoa. Các vấn đề về sức khoẻ như ruột, thận, bàng quang, xảy thai, di tinh, chảy máu. Cẩn thận các vấn đề liên quan đến pháp luật, hoặc găp những cấn đề liên quan đến mất cắp. Tuy nhiên đối với những người có cung phi là 3 hay 4 sẽ tốt cho việc học hành hay chinh phục kiến thức.",
  "1-2":
    "Đàn ông ở trong khu vực này sẽ bị các bệnh liên quan đến bao tử, dạ dày, tiêu hoá, thận, tai. Đối với phụ nữ sẽ liên quan đến bao tử và bệnh phụ khoa. Người chồng sẽ bị kiểm soát bởi người vợ và mối quan hệ trở nên không hoà hợp. Bụng nhiều nước dễ trương phình, tráng đinh bị tổn thương. Sử dụng đồ ngũ hành kim hoá giải",
  "1-3":
    "Cách cục này tạo ra tranh cãi. Các vấn đề liên quan đến pháp luật, mất tiền, bị cướp. Người ở trong khu vực này không kiểm soát được tính nóng này. Tuy nhiên trong vận 8 thể hiện cho sự di chuyển và may mắn từ việc di chuyển.",
  "1-4":
    "Cách cục này tốt cho việc học hành hoặc thờ cúng. Khi tích cực, cặp sao này mang tới sự thăng tiến và hạnh phúc. Khi tiêu cực, sao này đem tới các mối quan hệ tình cảm không tốt. Nếu ở khu vực này có núi nhọn, thể hiện mối quan hệ không có sự kết nối. Nếu ở khu vực này có đường vòng cung cắt vào hoặc con đường đâm thẳng vào thể hiện cho sự ngoại tình. Nếu bên ngoài cung này là loan đầu đẹp thể hiện cho sự hạnh phúc và tốt cho việc học tập.",
  "1-5":
    "Thể hiện cho bệnh tật, viêm bàng quang, ngộ độc thực phẩm, tiêu chảy. Phụ nữ khổng thể mang thai, bệnh tiểu đường, ung thư tử cung, nam giới dễ gặp các bệnh về thận tai. Cách cục này có thể đem đến bệnh liên quan đến bộ phận sinh dục.",
  "1-6":
    "Cực kỳ tốt cho những ai đang làm việc trong quân đội, lĩnh vực thể thao. Đạt được chức vị và thứ hạng cao cấp.Tuy nhiên dễ phạm đào hoa, khi tiêu cực, cặp sao này đem đến chấn thương liên quan đến dao, đổ máu với các vật nhọn. Nếu bên ngoài cung này có các cây khô, cây chết, vật nhọn, các góc nhọn chấn thương liên quan đến đầu hoặc não.",
  "1-7":
    "Đào hoa, ra khỏi cửa sẽ gặp may mắn, khi thất vận dễ gặp tai hoạ hoặc thị phi. “Huyền không mật chỉ” có câu: “Kim thuỷ đa tình, tham hoa luyến tửu”. Cẩn thận với những lời ngọt ngào nếu tiêu cực dẫn đến tổn thương liên quan đến tình cảm. Khi tiêu cực cách cục này dễ bị thú vật tấn công. ",
  "1-8":
    "Thổ khắc thuỷ dễ mắc phải những bệnh về tai, nam trung niên bị tổn thương hay những người mệnh quái khảm, bất lợi cho trẻ nhỏ, gặp những bệnh nặng và gây đau đớn như sỏi thận. Tuy nhiên trong vận 7 và 8 có thể đem đến những thành công về mặt tiền bạc và lĩnh vực văn chương. Sử dụng đồ có ngũ hành kim hoá giải",
  "1-9":
    "Thuỷ hoả không dung hoà, dễ mắc các bệnh về giới tính, bệnh về da, mắt, thần kinh. “Trúc tiết phú” viết trung nam gặp trung nữ ly hoả, vợ chồng trước cát sau bị tổn thương. Thể hiện cho sự lăng nhăng đối với cả đàn ông và phụ nữ. Những bệnh liên quan đến sự lây lan qua đường tình dục. Không thể có bầu. Các vấn đề về tim mạch. Tuy nhiên cách cục này đem đến địa vị xã hội cao cấp, khả năng quản lý và ảnh hưởng đến người khác một cách xuất sắc. Vận dụng tứ lục mộc hoá giải",
  "2-1":
    "Đàn ông bị các vấn đề liên quan đến bao tử, ruột và hệ thống tiêu hoá. Phụ nữ thường bị các vấn đề về bao tử và buồn nôn, bệnh phụ khoa. Nhu cầu tình dục của đàn ông bị giảm mạnh, các vấn đề như sẩy/phá thai có thể xảy ra. Trung nam bị tổn thương, nam thiếu niên bỏ nhà ra đi",
  "2-2":
    "Khi cặp sao này mang chất lượng tốt thể hiện lợi nhuận kinh doanh tăng mạnh. Tuy nhiên, đem đến bệnh tật. Gây nên các cơn đau bụng, các biến chứng phức tạp đối với phụ nữ mang thai. Người phụ nữ sẽ là người làm chủ gia đình. Vào vận 3 hoặc 9, cặp sao này mang đến bệnh tật nặng nề và sự tuyệt vọng.",
  "2-3":
    "“Đấu ngưu sát” Thể hiện cho tranh cãi, các vấn đề luật pháp, tranh chấp, gia đình tan vỡ, thị phi, miệng lưỡi, tai hoạ. Gây nên các bệnh đau nhức xương khớp, đặc biệt đối với phụ nữ, lưu ý giường ngủ khu vực này sẽ gặp bệnh khó sinh. Dùng đèn ánh sáng đỏ, thạch anh hồng hoá giải tam bích",
  "2-4":
    "Cặp sao này đem đến bệnh liên quan đến tinh thần và tạp nên sự căng thẳng lớn giữa mối quan hệ “mẹ chồng – nàng dâu”. Cẩn thận với các hoạt động ngoài trời, cẩn thận bị tấn công bởi động vật hoặc dễ bị trúng gió, người mẹ bị tổn thương. Cặp sao này đại diện cho sự căng thẳng và sự chống đối ngầm. Dùng thảm đỏ thạch anh hồng tiết khí 4 lục mộc",
  "2-5":
    "“Cô Quả”, là cặp sao thuần âm, mẹ gặp nhiều bệnh. Đây là cặp sao tạo nên sự chết chóc mà cần phải tránh bằng mọi giá. Cặp sao này gây ra ung thư, đau ruột thừa, sẩy/phá thai. “Tử bạch quyết” có câu: “Nhị hắc chủ về mẹ đa bệnh, Nhị hắc gặp Ngũ hoàng sẽ có người goá vợ”. Sử dụng chuông gió 6 thanh hoặc 6 đồng tiền, tránh động khu vực này",
  "2-6":
    "Cặp sao mang lại sự thịnh vượng về tài chính, đặc biệt khi liên quan đến thị trường bất động sản, Tuy nhiên, có thể làm cho người ta trở nên hà tiện. Tử bạch quyết có câu “ Nhị hắc đến càn, gặp bát bạch là tiền tài theo về”. Cẩn thận với bệnh kiết lị khi gặp cặp sao này.",
  "2-7":
    "Đương vận chủ nhiều tiền tài, tuy nhiên tiền cũng chảy ra một cách nhanh chóng, khi thất vận gặp điều tiếng thị phi hay trộm cắp. Cẩn thận với việc li dị, cẩn thận với Hoả Tai khi sao cửu tử bay đến.",
  "2-8":
    "Hợp thập, Cặp sao mang đến sự thịnh vượng liên quan đến tiền tài, có lợi cho dịch chuyển. Tuy nhiên khi cặp sao mang tính tiêu cực có thể tạo ra năng lượng khiến người ta muốn đi tu.",
  "2-9":
    "“Thuần âm” hoả thổ tương sinh, sinh nhiều con gái, dễ phạm đào hoa. Cặp sao tạo ra năng lượng khiến người đàn ông khó sống trong nhà. Khi tiêu cực cặp sao này mang năng lượng tiêu cực đến các vấn đề về mắt.",
  "3-1":
    "Tạo ra thị phi, tranh chấp, phá sản. Mất tiền do bị trộm cướp, có người thứ 3. Cẩn thận các bệnh liên quan đến gan và dễ bị chóng mặt.",
  "3-2":
    "“Đấu ngưu sát” chủ thị phi, quan phi, tranh chấp, phá sản. Mẹ và con trai dễ dàng cãi nhau, đem đến bất hoà trong gia đình. Các vấn đề liên quan đến đường ruột, dạ dày và có thể luôn cảm thấy đói bụng. Hoá giải bằng hành hoả âm như ngọn đèn đỏ và không được gây ra tiếng động",
  "3-3":
    "Khi thất lệnh dễ gặp thị phi, kiện tụng, tranh chấp nhưng khi đương lệnh chủ về phú quý. Cặp sao này đem đến những người lạnh lùng và không khoan dung. ",
  "3-4":
    "Khi tích cực, cặp sao này tốt cho người đàn ông tìm kiếm tình yêu, học hành văn chương, có quý nhân giúp đỡ, có danh tiếng. Khi tiêu cực cặp sao này đem đến sự bạo lực và sự tham ô, phạm đào hoa, gặp tai hoạ.",
  "3-5":
    "Phần nhiều chủ về không cát lợi, tổn thương đến tỳ vị, chủ về người bất an, trưởng nam bất an, dễ dính vào nghiện ngập cờ bạc. Ung thư gan và bệnh truyền nhiễm có thể tàn phá nặng nề sức khoẻ. Gãy chân tay cũng dễ xảy ra với cặp sao này. Mất tiền cũng chịu ảnh hưởng dưới cặp sao 3-5.",
  "3-6":
    "Kiện tụng, tay chân bị tổn thương, bất lợi trưởng nam. Nhức đầu, chấn thương, tai nạn, đặc biệt tai nạn với các vật sắc nhọn, bằng kim loại. Khi đương lệnh có quyền uy, tin vui về văn chương hay công danh. Sử dụng hành thuỷ thông quan (tuỳ linh chính), có thể dùng thảm màu đen để hoá tiết kim",
  "3-7":
    "Dễ phá sản, mất trộm liên quan đến tiền bạc, trưởng nam bị tổn thương. Cẩn thận các vấn đề liên quan đến pháp luật. Liên quan đến sự phản bội từ bạn bè hoặc người thân. Tuy nhiên khi tích cực, trong vận 7, đem đến tài chính dồi dào. ",
  "3-8":
    "“Thuần dương” Bất lợi nam thiếu niên. Sẩy thai, tim mạch và bệnh suyễn. Gia đình sụp đổ. Cặp sao 3-8 có thể tạo ra năng lượng “đồng tính nam”. Trong vận 7 và 8, tốt cho tài chính. Lấy hoả tiết mộc sinh thổ, dùng các đồ vật như thảm đỏ, thạch anh hồng, mã não để hoá giải",
  "3-9":
    "Khi tích cực, cách cục này tạo nên những con người thông minh, nhạy bén, thăng quan tiến chức nhưng hà tiện bủn xỉn. Khi tiêu cực tạo nên các vấn đề liên quan đến Hoả Tai.",
  "4-1":
    "Cách cục tuyệt vời cho việc học tập và thi cử. Những người làm các công việc viết lách cũng đạt được địa vị cao và lợi nhuận. Tốt cho việc cầu nguyện. Thất lệnh dễ phạm đào hoa, dâm loạn, không giữ quy tắc",
  "4-2":
    "Mẹ chồng – nàng dâu bất hoà. Cực kỳ tiêu cực đối với sức khoẻ của những người phụ nữ lớn tuổi lưu ý bệnh dạ dày",
  "4-3":
    "Dâm loạn, trộm cướp. Phụ nữ cảm thấy tinh thần bất ổn, rối loạn tâm thần. Cặp sao này đại diện cho sự lừa dối",
  "4-4":
    "Đương lệnh có tin vui về văn chương, lợi cho đường công danh, được quý nhân giúp đỡ, thất lệnh dễ phạm đào hoa, đi ra ngoài sẽ không trở lại. Chú ý bệnh Hen Suyễn. Cách cục tốt cho việc học tập, phát triển sự thông minh và suy nghĩ",
  "4-5":
    "Cách cục nguy hiểm tạo nên ung thư vú, các bệnh nhiễm trùng. Cẩn thận với các vấn đề liên quan đến xã hội đen, nghiện cờ bạc,...Đương lệnh sẽ có nhiều điền sản",
  "4-6":
    "Chuyện phiền não, trước hợp sau tan, vất vả, khó sinh, bất lợi trưởng nữ. Bệnh liên quan đến mắt và miệng. Tự tử (nếu như có con đường, sát khí nặng đâm thẳng vào cung này dễ dẫn tới treo cổ)",
  "4-7":
    "Trong vận 7, cực kỳ tốt cho tình cảm, tiền tài sắc đẹp. Khi thất lệnh, chị dâu em chồng bất hoà, phạm đao thương, không có lợi cho văn chương học hành, mất trộm, thổ huyết",
  "4-8":
    "Khi tích cực, cực kỳ dễ thành công trong lĩnh vực kinh doanh bất động sản. Các cơ hội tài chính tuyệt vời cho những ai bước ra khỏi vùng an toàn của mình. Khi tiêu cực tạo nên bệnh phong thấp, sảy thai, tổn hao tài sản, nam thiếu niên bị tổn thương, tàn phế",
  "4-9":
    "Thuần âm- Mộc hoả thông minh, chủ sinh ra người hiền tài có nhiều tiền của, nhưng trường năng lượng lại không tốt cho nam giới. Khi tiêu cực có thể tạo nên năng lượng “đồng tính nữ”",
  "5-1":
    "Tổn hại nhân đinh, bất lợi cho nam giới trung niên,  đem lại bệnh liên quan đến bàng quang, niệu đạo, thận, hệ thống sinh sản, thận, tai",
  "5-2":
    "Cặp sao tạo ra goá phụ trong nhà. Bệnh liên quan đến bao tử không lợi cho phụ nữ mang thai. Cặp sao này có thể đem đến tai ương thậm chí tử vong. Hoá giải bằng phong linh 6 thanh",
  "5-3": "Mất tiền thậm chí phá sản, sức khoẻ ảnh hưởng nặng nề",
  "5-4":
    "Mộc khắc thổ chủ phá tài, điền sản tiêu hao. Ung thư vú, bệnh không dứt. Nghiện ngập, cờ bạc",
  "5-5":
    "Ngoại trừ vận 5, cặp sao này đem đến các bệnh dẫn đến hôn mê, không lợi cho phụ nữ mang thai. Cặp sao đem đến chiến tranh, đánh nhau. Trong vận 7, các bệnh ác tính dễ xảnh ra như ung thư xương, bất lực, tàn tật",
  "5-6":
    "Lục bạch kim hoá giải Ngũ Hoàng tuy nhiên người cha không được yên ổn. Đem đến các bệnh dẫn đến hôn mê, ung thư, bất lực",
  "5-7":
    "Trong vận 7, có thể tốt cho tiền. Nhưng có thể gây ra ngộ độc, bệnh hoa liễu, ung thư miệng, cổ họng, mất trộm, thị phi ",
  "5-8":
    "Cặp sao này cũng có thể đem đến năng lượng tốt về tiền bạc. Tuy nhiên gây nên ung thư ở vùng hô hấp, bị liệt, bệnh tinh thần, bất lợi với nam thiếu niên",
  "5-9":
    "Đây cũng là một cặp sao gây chết chóc, các vấn đề liên quan đến mắt, bệnh loét tá tràng. Khi có con sao Thất Xích bay đến có thể gây chết người bởi Hoả Tai. Trong Phi tinh phú có câu “Lầu xanh nhiễm bệnh, chỉ bởi Thất Xích Hữu Bật gặp Ngũ Hoàng”. Người ngoài có thể dùng tiền bạc của họ để hãm hại bạn. Phù hợp với người có mệnh quái số 2. Hoá giải bằng phong linh kim loại 6 thanh",
  "6-1":
    "Cặp sao đặc biệt tốt đối với những người nắm quyền lực hoặc làm cấp quản lý, có tin vui về nghiệp văn chương học hành. Đại diện cho quyền lực, khả năng kiểm soát tài chính. Tốt cho những người làm trong lĩnh vực chính trị. Khi thất lệnh chủ về phạm đào hoa",
  "6-2":
    "Đương lệnh có tài lộc, thất lệnh gặp các bệnh về đường ruột, bệnh phụ khoa. Cách cục này có thể tạo nên ảo giác",
  "6-3":
    "Cẩn thận với các chấn thương ở tay – chân do dao kéo, dễ gặp tai nạn. Đau đầu, cẩn thận khi dùng các vật nhọn, sắc, bén",
  "6-4":
    "Các mối quan hệ khó kéo dài trong cách cục này. Cảm thấy gánh nặng và không thông hiểu nhau. Phụ nữ dễ bị bệnh. Bất lợi cho việc học hành, cách cục tạo ra sự tự sát bằng việc treo cổ",
  "6-5":
    "Tạo nên ung thư, khối u ác tính, bất lợi với con trưởng, công việc gặp khó khăn, khó thành công trong sự nghiệp",
  "6-6":
    "Khi trong vận 6, cực kỳ tốt cho tiền tài. Tuy nhiên trong các vận khác thể hiện bệnh ở Phổi và tạo ra thù hằn cho người trong gia đình nhất là con trưởng và người làm cha, đôi khi cũng có thể gặp kiện tụng",
  "6-7":
    "“Đao kiếm sát” Chủ về kiện tụng, bất hoà, tranh cãi, cấp dưới phản bội, các bệnh ngoài da, bị thương ở tau chân, mất trộm, sinh con gái. Anh chị em trong gia đình khó hoà thuận. Cạnh tranh không công bằng. Đem đến sự mất tài sản do bị trộm/cướp, vận 7 đem tin vui về tài vận. Có thể dùng hành thuỷ (bể cá bên trong nuôi cá màu đen) để hoá giải",
  "6-8":
    "Tốt cho những người làm trong lĩnh vực BDS. Tốt cho tài chính và địa vị xã hội. Tuy nhiên nếu tiêu cực, cách cục này đem đến bệnh tinh thần và xã hội đen",
  "6-9":
    "Cách cục này được gọi là Hoả Thiêu Thiên Môn. Con cái trong gia đình không kiểm soát được và cư xử rất kém, đặc biệt là con trai. Các bệnh liên quan đến đầu, răng, não, phổi, đường huyết cần được cẩn trọng",
  "7-1":
    "Cách cục tốt cho những ai làm những công việc cần sự di chuyển nhiều, kim thuỷ đa tình, dễ phạm đào hoa. ",
  "7-2":
    "Những ai đang muốn có em bé cần phải tránh cặp sao này, cặp sao này khó có thể dưỡng thai. Bên cạnh đó mối quan hệ mẹ chồng – nàng dâu cũng sẽ không tốt. 7-2 hợp thành hoả tiên thiên, có lợi cho nhị hắc, ngũ hoàng, bát bạch, vận 7 đương lệnh chủ về tiền tài phú quý đào hoa. Khi thất lệnh chủ về miệng lưỡi thị phi bệnh tật",
  "7-3":
    "Cẩn thận mất đồ, mất tiền, bị ăn trộm. Các vấn đề liên quan đến pháp luật. Các chấn thương hoặc bệnh liên quan đến mắt, tổn thương trưởng nam. Trong “Huyền Không bí chỉ” có câu: Mộc kim tương phản, bội nghĩa, vong ân, cay nghiệt",
  "7-4":
    "Đào hoa, đi xa, bất lợi cho nữ giới, đường công danh thi cử trở ngại. Các vấn đề liên quan đến đường hô hấp có thể trở nặng nếu như bị ho và không chữa trị kịp thời. Các vấn đề về luật pháp nếu có thêm các sao năm hoặc tháng tiêu cực bay đến",
  "7-5":
    "Cách cục tạo ra sự gây gổ và hãm hại. Đặc biệt xấu trong vận 8. Cảm thấy không yên ổn trong tâm trí, bệnh tim, bệnh hoa liễu (nếu gặp cửu tử). Bệnh tinh thần có thể dẫn đến tâm thần. Cách cục có thể đem đến sự dâm dục, mại dâm và nghiện ngập",
  "7-6":
    "“Đao kiếm sát” Tạo ra năng lượng ganh tị, nhiều tranh cãi. Bệnh về da, sinh nhiều con gái, thị phi, tranh đấu, quan tụng",
  "7-7":
    "Trong vận 7 đem đến các vận may liên quan đến tiền tài. Tuy nhiên trong vận 8 dễ gặp trộm/cướp, và nhiều vấn đề không giải quyết được. Người đàn ông thích nói chuyện ngọt ngào tán tỉnh phụ nữ",
  "7-8":
    "Tốt cho tiền bạc và tình cảm. Có thể tận dụng năng lượng của cách cục này để leo lên đỉnh từ vực thẳm",
  "7-9":
    "Các bệnh về tim. Cẩn thận Hoả Tai khi có các sao tiêu cực bay đến từ tháng và năm. Cách cục cũng gây nên những vấn đề liên quan đến tình cảm và khó kiểm soát cảm xúc, bệnh về tim, thiếu nữ gặp nhiều tai hoạ",
  "8-1":
    "Người đàn ông lớn tuổi không nên sử dụng khu vực này. Cách cục này dễ gây nên các bệnh về bàng quang. Người trẻ tuổi cẩn thận các bệnh liên quan đến tai. Trong vận 7 và 8, cách cục mang đến vận may về tiền tài, con nít thì thông minh",
  "8-2":
    "“Thuần âm” Bao tử, đường ruột có vấn đề dưới sự ảnh hưởng của sao này. Bệnh tật sẽ tàn phá tài chính của gia đình trong cách cục này. Cách cục này tạo ra nhà sư, cha sứ, ni cô, ma xơ. Trong vận 8, tốt cho địa vị xã hội",
  "8-3":
    "Cách cục này cực xấu cho trẻ dưới 12 tuổi. Gặp vấn đề trong việc phát triển. Ngoài ra còn gặp các bệnh như đau lưng, tinh thần. Trong vận 8, tốt cho địa vị xã hội",
  "8-4":
    "Con gái khó xuất giá, khó sinh con trai, đau lưng, bị thú vật cắn, bệnh sỏi mật và bệnh liên quan đến thận. Gây tan vỡ trong mối quan hệ tình cảm, tạo nên mâu thuẫn trong hôn nhân. Trong vận 8, cách cục này được xem là tích cực",
  "8-5":
    "Mặc dù cực kỳ tốt cho tài chính trong vận 5, tuy nhiên vẫn tạo nên các bệnh nan y như ung thư, liệt. Khi thất lệnh tạo ra các bệnh tật tai ương cho người trong gia đình, tinh thần bất an, đứt gân gãy xương, nam thiếu niên gặp bất lợi, trẻ nhỏ gặp nhiều khó khăn",
  "8-6": "Cặp sao tích cực, đem đến vận may trong sự nghiệp và địa vị, dễ sinh quý tử",
  "8-7": "Tốt cho việc phát triển tài chính, đại lợi đối với nam nữ thanh thiếu niên",
  "8-8":
    "Trong vận 8, vượng về điền sản, có lợi với nam thiếu niên, dễ sinh con trai, khi thất lệnh nam thiếu niên dễ gặp thương vong",
  "8-9": "Cặp sao đại diện cho rất nhiều sự kiện vui như đám cưới, thăng tiến, sinh em bé,...",
  "9-1":
    "Độ tuổi đi học nên sử dụng năng lượng của cặp sao này. Cực kỳ tốt trong việc học tập, thi cử. Tuy nhiên, nếu sao tiêu cực bay đến, đem đến bệnh hoa liễu, các vấn đề lăng nhăng và sức khoẻ kém. Những ai muốn đổi việc thường sẽ gặp các công việc tốt hơn hiện tại",
  "9-2":
    "Phụ nữ cẩn thận vấn đề phức tạp khi sinh nở và các bệnh phụ khoa, các bệnh về mắt, hoả gặp thổ dễ sinh ra người đần độn ương bướng, khó sinh, nghèo khổ, khi đắc lệnh sinh ra người đỗ đạt, vượng đinh nhưng cuộc sống không vui vẻ",
  "9-3":
    "Các vấn đề liên quan đến pháp luật, thậm chí có thể ở tù. Các bệnh về Gan cần phải cực kỳ cẩn thận. Đương lệnh sinh ra kẻ thông minh, con cái hiếu thuận",
  "9-4":
    "Gây nên những bất thường liên quan đến tình dục, thậm chí loạn luân. Phụ nữ có thể trở nên đồng tính. Tuy nhiên trong vận 7, 8 và toạ tinh 9 tốt cho sức khoẻ và các tính chất tiêu cực bị giảm thiểu, có thể bị hiếm muộn con cháu",
  "9-5":
    "Làm cho những người trong khu vực này nóng tính bất thường, cực kỳ cứng đầu, không tốt cho tài chính, dễ gặp hoả hoạn. Hoá giải bằng phong linh kim loại 6 thanh",
  "9-6":
    "Các bệnh liên quan đến đầu, não và tim một cách nặng nề khi gặp cách cục này, nhà có con cái bất hiếu cãi mắng cha mẹ, thường gặp phải hình phạt kiện tụng. Sử dụng hành thổ hoặc đồ vật màu vàng thổ như thạch anh vàng, thảm màu vàng để hoá giải",
  "9-7":
    "Cẩn thận các vấn đề liên quan đến Hoả Tai. Những người có bệnh về tim cũng không nên ở khu vực này. Bất lợi với các thiếu nữ, thường gặp miệng lưỡi thị phi",
  "9-8":
    "Cặp sao này mang đến hạnh phúc cho các mối quan hệ và đem đến các sự kiện vui vẻ như kết hôn, có em bé hoặc thăng quan tiến chức, tuy nhiên người nhà dễ mắc bệnh đường máu, thổ huyết",
  "9-9":
    "Là cặp sao của cơ hội, đặc biệt tốt trong vận 9. Tốt cho thị trường thời trang, mỹ phẩm, trang sức. Trong vận 9, tài chính cực kỳ tốt. Cẩn thận bệnh liên quan đến mắt, thần kinh",
}

export { defaultTableTypeEn, defaultTableType, cachCuc }
