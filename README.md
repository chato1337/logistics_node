## Introducing Logistics App: 

>Advanced Logistics Management Backend API

LogisticsPro is a robust backend API designed to serve as the backbone of your logistics management system. With its comprehensive features and RESTful architecture, LogisticsPro empowers businesses to efficiently handle their supply chain, package tracking, and customer satisfaction. This powerful API enables you to create models representing crucial concepts such as customers, packages, and carriers, while also providing essential endpoints for creating, editing, and deleting packages.

Key Features:

1.  Customer Model: Effortlessly manage customer information using LogisticsPro's Customer Model. Capture and store important details like names, addresses, phone numbers, and more. This centralized repository ensures easy access to customer information, facilitating seamless communication and personalized service.
    
2.  Package Model: The Package Model within LogisticsPro allows you to define attributes such as weight, dimensions, origin and destination addresses, delivery status, and more. This comprehensive representation enables accurate package tracking throughout the entire logistics process, ensuring timely and secure delivery.
    
3.  Delivery Model: LogisticsPro's Carrier Model simplifies carrier management. Define carrier details, including names, vehicle types, contact numbers, and other relevant information. This feature streamlines the process of assigning packages to specific carriers, optimizing logistics operations and ensuring reliable service.
    
4.  Customizable Endpoints: LogisticsPro offers a flexible RESTful API architecture, allowing you to customize endpoints based on your specific requirements. Create endpoints to display the list of packages sent by a particular customer, facilitating easy access to relevant information. Additionally, LogisticsPro provides endpoints to view packages assigned to specific carriers, enabling efficient monitoring and coordination. Furthermore, the API supports endpoints for creating, editing, and deleting packages, providing complete control and adaptability.

## Requirements

- mysql 5.7^
- node 16.14^

## Installation

```bash
git clone git@github.com:chato1337/logistics_node.git

cd logistics_app_node

# copy environment variables & replace with your credentials
cp .env.example .env

# install dependencies (yarn recomended)
yarn install
# or
npm install

# run project
npm run dev
```