//寫一個錯誤模組 error module

// 這個函式用來處理錯誤情況，當伺服器遇到錯誤時，可以呼叫這個函式來回應一個錯誤訊息給客戶端
function errorHandle(res){  //res 是 HTTP 回應物件，這個函式會使用這個物件來設定回應的狀態碼和內容
                const headers =  {
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With', // 允許瀏覽器在跨域請求時攜帶這些 Header
                'Access-Control-Allow-Origin': '*', // 允許來自任何來源的請求（* 代表所有來源），這是 CORS（跨來源資源共享）的一部分，讓瀏覽器知道這個伺服器願意接受來自不同來源的請求
                'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE', // 允許瀏覽器使用這些 HTTP 方法來發送請求到這個伺服器，例如：PATCH、POST、GET、OPTIONS、DELETE 等等
                'Content-Type': 'application/json' // 傳送內容是 JSON 格式，這樣瀏覽器就知道如何解析和顯示這些資料
};              
                res.writeHead(400,headers);  // 設定HTTP回傳狀態碼為 400（錯誤），並在 Header 告知瀏覽器接下來要傳送的是 //（text/plain）代表"純文字格式"
                res.write(JSON.stringify({   // JSON.stringify) 將"物件"轉換成"字串"，這樣瀏覽器才能正確解析和顯示這些資料
                "status": "error",           // status 是一個表示請求狀態的屬性，這裡設定為 "error"，表示這是一個錯誤的回應
                "message": "Invalid JSON format or missing to-do title", // message 是一個描述錯誤的訊息，這裡告訴使用者 JSON 格式無效或者缺少待辦事項標題
            }));    
              res.end(); // 結束回應，告訴伺服器這個回應已經完成，可以發送給客戶端了
             }

// 將這個函式導出，讓其他檔案（例如 server.js）可以引入並使用這個錯誤處理函式
export default errorHandle; // ES6 模組系統的寫法，適用於現代 JavaScript 環境，使用 import 來引入模組
// module.exports = errorHandle;  // CommonJS 模組系統的寫法，適用於 Node.js 的舊版本，使用 require() 來引入模組 