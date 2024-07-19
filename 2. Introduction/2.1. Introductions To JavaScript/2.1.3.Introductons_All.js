// Toán tử gán
// Một toán tử gán gán một giá trị cho toán hạng bên trái của nó dựa trên giá trị của toán hạng bên phải. Dưới đây là một số toán tử gán:
//  += toán tử gán cộng
//  -= toán tử gán trừ
//" *= toán tử gán nhân
//  /= toán tử gán chia

let number = 100;
// Cả 2 câu lệnh đều + thêm 10
number = number + 10;
number += 10;
console.log(number);
//---------------------------------------------------------------------------------------------------------------------------


// Nội suy chuỗi
// Nội suy chuỗi là quá trình đánh giá các chuỗi ký tự chứa một hoặc nhiều trình giữ chỗ (biểu thức, biến, v.v.).
// Nó có thể được thực hiện bằng cách sử dụng template literals: text ${expression} text.

// Biến
// Biến được sử dụng khi cần lưu trữ một đoạn dữ liệu. Một biến chứa dữ liệu có thể được sử dụng trong chương trình ở nơi khác. Sử dụng biến cũng đảm bảo khả năng tái sử dụng mã vì nó có thể được sử dụng để thay thế cùng một giá trị ở nhiều nơi.

// Undefined
// undefined là một giá trị nguyên thủy của JavaScript đại diện cho sự thiếu giá trị được xác định. Các biến được khai báo nhưng không được khởi tạo giá trị sẽ có giá trị là undefined.

// Học JavaScript: Biến
// Một biến là một hộp chứa dữ liệu được lưu trữ trong bộ nhớ máy tính. Nó được tham chiếu bởi một tên mô tả mà lập trình viên có thể gọi để gán một giá trị cụ thể và truy xuất nó.

// Khai báo biến
// Để khai báo một biến trong JavaScript, có thể sử dụng bất kỳ từ khóa nào trong ba từ khóa sau cùng với một tên biến:
// var được sử dụng trong các phiên bản JavaScript trước ES6.
// let là cách ưa thích để khai báo một biến khi nó có thể được gán lại.
// const là cách ưa thích để khai báo một biến với giá trị hằng số.

// Template Literals
// Template literals là các chuỗi cho phép nhúng biểu thức, ${expression}. Trong khi các chuỗi thông thường sử dụng dấu nháy đơn ' hoặc dấu nháy kép ", template literals sử dụng dấu backticks.

// Từ khóa let
// let tạo ra một biến cục bộ trong JavaScript và có thể được gán lại. Việc khởi tạo trong khi khai báo một biến let là tùy chọn. Một biến let sẽ chứa undefined nếu không có gì được gán cho nó.

// Từ khóa const
// Một biến hằng số có thể được khai báo bằng từ khóa const. Nó phải có một giá trị được gán. Bất kỳ nỗ lực nào để gán lại một biến const sẽ dẫn đến lỗi runtime của JavaScript.

// Nối chuỗi
// Trong JavaScript, nhiều chuỗi có thể được nối lại với nhau bằng cách sử dụng toán tử +. Trong ví dụ, nhiều chuỗi và các biến chứa giá trị chuỗi đã được nối lại. Sau khi thực thi khối mã, biến displayText sẽ chứa chuỗi đã được nối.

// console.log()
// Phương thức console.log() được sử dụng để ghi hoặc in các thông báo ra console. Nó cũng có thể được sử dụng để in đối tượng và thông tin khác.

// JavaScript
// JavaScript là một ngôn ngữ lập trình điều khiển hành vi động trên hầu hết các trang web. Cùng với HTML và CSS, nó là một công nghệ cốt lõi giúp web hoạt động.

// Phương thức
// Phương thức trả về thông tin về một đối tượng và được gọi bằng cách nối một instance với dấu chấm ., tên phương thức, và dấu ngoặc đơn.

// Đối tượng tích hợp sẵn
// Đối tượng tích hợp sẵn chứa các phương thức có thể được gọi bằng cách nối tên đối tượng với dấu chấm ., tên phương thức, và một bộ dấu ngoặc đơn.

// Số
// Số là một loại dữ liệu nguyên thủy. Chúng bao gồm tập hợp tất cả các số nguyên và số thập phân.

// Thuộc tính .length của chuỗi
// Thuộc tính .length của một chuỗi trả về số ký tự tạo thành chuỗi đó.

// Các trường hợp dữ liệu
// Khi một đoạn dữ liệu mới được giới thiệu vào một chương trình JavaScript, chương trình sẽ theo dõi nó trong một trường hợp của loại dữ liệu đó. Một trường hợp là một trường hợp riêng lẻ của một loại dữ liệu.

// Boolean
// Boolean là một loại dữ liệu nguyên thủy. Chúng có thể là true hoặc false.

// Math.random()
// Phương thức Math.random() trả về một số ngẫu nhiên dạng số thực trong khoảng từ 0 (bao gồm) đến dưới 1 (không bao gồm).

// Math.floor()
// Hàm Math.floor() trả về số nguyên lớn nhất nhỏ hơn hoặc bằng số đã cho.

// Chú thích dòng đơn
// Trong JavaScript, chú thích dòng đơn được tạo bằng hai dấu gạch chéo liên tiếp //.

// Null
// Null là một loại dữ liệu nguyên thủy. Nó đại diện cho sự vắng mặt có chủ ý của giá trị. Trong mã, nó được biểu diễn là null.

// Chuỗi
// Chuỗi là một loại dữ liệu nguyên thủy. Chúng là bất kỳ nhóm ký tự nào (chữ cái, khoảng trắng, số, hoặc ký hiệu) được bao quanh bởi dấu nháy đơn ' hoặc dấu nháy kép ".

// Toán tử số học
// JavaScript hỗ trợ các toán tử số học cho:
// + phép cộng
// - phép trừ
// * phép nhân
// / phép chia
// % phép chia lấy dư

// Chú thích nhiều dòng
// Trong JavaScript, chú thích nhiều dòng được tạo bằng cách bao quanh các dòng bằng /* ở đầu và */ ở cuối. Chú thích là cách tốt để giải thích một khối mã hoặc chỉ ra một số gợi ý, v.v.

// Toán tử chia lấy dư
// Toán tử chia lấy dư, đôi khi được gọi là modulo, trả về số còn lại sau khi số bên phải chia vào số bên trái nhiều lần nhất có thể mà không vượt quá số đó.
