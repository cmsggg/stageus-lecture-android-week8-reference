# 서버 명세

웹서버 구성 - Node.js & Exrpess  
통식 방식 - REST  
IP주소 - 3.35.214.92  
Port - 3000  

# API 명세

## 회원가입 API

#### Endpoint 
- /account  
#### Method 
- POST  
#### Reqeust  
```json
{
	"id": String,
	"pw": String,
	"name": String,
	"contact": String
}
```
#### Response
```json
{
	"message": String
	"success": Boolean
}
```
#### Conditions
- id는 10자 제한
- pw는 10자 제한
- name은 10자 제한
- contact는 11자 제한


## 로그인 API 

#### Endpoint - /account/login
#### Method - GET
#### Reqeust
```json
{
	"id": string,
	"pw": string
}
```
#### Response
```json
{
	"message": String
	"success": Boolean	
}
```

## 카테고리 가져오기 API

#### endpoint 
- /category
#### method 
- GET
#### Reqeust
```json
{
	"lang" : String
}
```
#### Response
```json
{
	"message": String
	"success": Boolean
	"data": List [
		{
			"category_name": String
		}
	]
}
```
#### Conditions
- lang은 "kr" 혹은 "en"을 보낼 것


== 메뉴 가져오기 API ==

#### endpoint 
- /category/menu
#### method 
- GET
#### Reqeust
```json
{
	"category_name": String
	"lang": String
}
```
#### Response
```json
{
	"message": String
	"success": Boolean	
	"data": List [
		{
			"menu_name": String,
			"menu_price:" Int,
			"menu_image:" String
		}
	]            
}
```
#### Conditions
- lang은 "kr" 혹은 "en"을 보낼 것


== 주문 내용 넣기 API ==

#### Endpoint 
- /order
#### Method 
- POST
#### Reqeust
```json
{
	"id": String,
	"order_list": List [
		{
			"name": String,
			"count:" Int,
			"sum_price": Int
		}
	],
	"total_price": Int
}
```
#### Response
```json
{
	"message": String
	"success": Boolean	
}
```

== 주문 기록 가져오기 API ==

#### Endpoint 
- /order
#### Method 
- GET
#### Reqeust
```json
{
	"id": String
}
```
#### Response
```json
{
	"message": String
	"success": Boolean	
	"data": List [
		{
			"name": String,
			"count:" Int,
			"sum_price": Int
		}
	]
	"total_price": Int
}
```
