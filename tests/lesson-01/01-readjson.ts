import * as fs from 'node:fs';
import * as path from 'node:path';

// Cách 1: fs.readFileSync + JSON.parse
const raw = fs.readFileSync(path.resolve('src/data/01-data.json'), 'utf-8');
const pages = JSON.parse(raw);
console.log(pages); // object JavaScript

// Map, filter, reduce, find, ...
const modifiedData = pages.map(item => {
    return {
        ...item,
        currentDate: new Date(),
    }
});

console.log(modifiedData);


// npx tsx tests/lesson-01/01-readjson.ts
// npx ts-node tests/lesson-01/01-readjson.ts c 
// ( ts-node không tương thích với TypeScript 7 nên sẽ ko chạy dc )

/*
Project đang cài typescript@7.0.2 (bản mới nhất, được viết lại bằng Go) cùng ts-node@10.9.2. Bản ts-node này được viết cho TypeScript 5 trở xuống. Khi chạy, ts-node gọi ts.sys.fileExists, nhưng TypeScript 7 không còn cung cấp ts.sys theo cách cũ. Vì ts.sys là undefined nên bạn nhận được lỗi Cannot read properties of undefined (reading 'fileExists').

Cách sửa (chọn 1):

Cách 1: Hạ TypeScript xuống bản 5


npm i -D typescript@5
npx ts-node tests/lesson-01/01-readjson.ts
Cách 2: Dùng tsx thay cho ts-node (khuyên dùng)

tsx nhanh hơn và không phụ thuộc vào phiên bản TypeScript:


npm i -D tsx
npm uninstall ts-node
npx tsx tests/lesson-01/01-readjson.ts
Lưu ý: Playwright tự biên dịch được TypeScript, nên khi chạy test bằng npx playwright test thì không cần ts-node hay tsx. Bạn chỉ cần một trong hai công cụ này khi muốn chạy riêng một file .ts như 01-readjson.ts.
*/