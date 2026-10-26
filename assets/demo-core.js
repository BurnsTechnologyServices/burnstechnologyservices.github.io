/* Pure browser-local demo logic. Also exported for independent Node checks. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.BurnsDemo=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const SAMPLE='SKU,Product,UnitPrice,PackSize\nB1001,Tea bags,2.40,1\nB1002,Coffee beans,7.50,1\nB1003,Oat drink,1.85,6\nB1004,Olive oil,8.90,1\nB1005,Pasta,-1.20,12\n,Rice,3.10,6';
function parseCSV(text){
 if(typeof text!=='string'||text.length>100000)throw new Error('Please use a CSV file smaller than 100 KB.');
 const rows=[];let row=[],field='',quoted=false,closed=false;
 text=text.replace(/^\uFEFF/,'');
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(quoted){if(c==='"'){if(text[i+1]==='"'){field+='"';i++;}else{quoted=false;closed=true;}}else field+=c;continue;}
  if(c==='"'){if(field.trim()||closed)throw new Error('A quote is in the wrong place. Check your CSV formatting.');quoted=true;field='';}
  else if(c===','){row.push(field.trim());field='';closed=false;}
  else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;row.push(field.trim());if(row.some(x=>x!==''))rows.push(row);row=[];field='';closed=false;}
  else {if(closed&&!/\s/.test(c))throw new Error('Unexpected text after a closing quote.');if(!closed)field+=c;}
 }
 if(quoted)throw new Error('A quoted field is not closed. Check the CSV formatting.');
 row.push(field.trim());if(row.some(x=>x!==''))rows.push(row);
 if(rows.length>1001)throw new Error('This demonstration supports up to 1,000 product rows.');
 return rows;
}
function validateCSV(text){
 const parsed=parseCSV(text);if(parsed.length<2)throw new Error('Add a header and at least one product row.');
 const required=['sku','product','unitprice','packsize'];
 const headers=parsed[0].map(x=>x.toLowerCase().replace(/\s+/g,''));
 if(new Set(headers).size!==headers.length)throw new Error('Column headings must be unique.');
 if(required.some(x=>!headers.includes(x)))throw new Error('Use the columns SKU, Product, UnitPrice and PackSize.');
 const indexes=required.map(x=>headers.indexOf(x));const counts=new Map();
 parsed.slice(1).forEach(row=>{const sku=row[indexes[0]];if(sku)counts.set(sku,(counts.get(sku)||0)+1);});
 const rows=parsed.slice(1).map((raw,i)=>{
  const [sku='',product='',price='',pack='']=indexes.map(index=>raw[index]||'');const errors=[];
  if(raw.length!==headers.length)errors.push('Column count does not match header');
  if(!sku)errors.push('Missing SKU');if(!product)errors.push('Missing product name');
  if(sku&&counts.get(sku)>1)errors.push('Duplicate SKU');
  if(!/^\d+(\.\d{1,2})?$/.test(price)||!Number.isFinite(Number(price)))errors.push('Price must be zero or a positive number with up to 2 decimals');
  if(!/^[1-9]\d*$/.test(pack)||!Number.isSafeInteger(Number(pack)))errors.push('Pack size must be a positive whole number');
  if([sku,product].some(x=>/^[=+@-]/.test(x)))errors.push('Formula-like text needs review');
  return {row:i+2,sku,product,price,pack,errors,valid:errors.length===0};
 });
 return {rows,total:rows.length,ready:rows.filter(x=>x.valid),review:rows.filter(x=>!x.valid)};
}
function escapeCSV(value){const s=String(value);return /[",\r\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;}
function exportCSV(result){return [['SKU','Product','UnitPrice','PackSize'],...result.ready.map(r=>[r.sku,r.product,Number(r.price).toFixed(2),r.pack])].map(row=>row.map(escapeCSV).join(',')).join('\r\n');}
function summarizeReport(rows){let revenue=0,cost=0;for(const row of rows){if(!Number.isFinite(row.revenue)||!Number.isFinite(row.cost)||row.revenue<0||row.cost<0)throw new Error('Use a zero or positive number for each amount.');revenue+=row.revenue;cost+=row.cost;}return {revenue,cost,contribution:revenue-cost,margin:revenue===0?null:(revenue-cost)/revenue*100};}
return {SAMPLE,parseCSV,validateCSV,exportCSV,escapeCSV,summarizeReport};
});
