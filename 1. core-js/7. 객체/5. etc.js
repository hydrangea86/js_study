

//객체의 중첩구조
//예시: 게시판 게시글

var articles = {
    totalCount: 3670, //총 게시물 수
    admin: '김말똥', //관리자이름
    pageNumber: 11, //페이지넘버
    articleList: [  //게시물 데이터
        {
            bno: 0, //글번호
            title: '뽀로로랜드',
            write: '김뽀로로',
            content: '즐~',
            viewCount: 0,
            regDate: '2021-08-11'
        }, 
        {
            bno: 1, //글번호
            title: '메롱메롱',
            write: '박뽀로로',
            content: '메롱',
            viewCount: 5,
            regDate: '2021-08-11'
        }, 
        {
            bno: 2, //글번호
            title: '안녕안녕',
            write: '김철수',
            content: '잘가세여~~',
            viewCount: 7,
            regDate: '2021-08-11'
        }, 
    ] 
};

console.log(articles.admin);
console.log(articles.articleList);
console.log('==============================');
console.log(articles.articleList[1]);
console.log(articles.articleList[2].title);
console.log(articles.articleList[0]['write']);