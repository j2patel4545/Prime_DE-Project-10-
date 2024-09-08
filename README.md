<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Stack - Blood Bank Administration System</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: #fce4ec;
            color: #333;
            overflow-x: hidden;
        }
        header {
            background: #ec407a;
            color: #fff;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .container {
            width: 90%;
            margin: auto;
            overflow: hidden;
            padding: 20px 0;
        }
        .image-wrapper {
            margin-bottom: 40px;
            position: relative;
        }
        .image-wrapper img {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            object-fit: cover;
        }
        .tech-stack {
            list-style: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            animation: fadeIn 2s ease-out;
        }
        .tech-stack li {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            width: 150px;
            text-align: center;
        }
        .tech-stack li:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .tech-stack p {
            margin: 0;
            font-size: 1rem;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @media (max-width: 768px) {
            header h1 {
                font-size: 2rem;
            }
            .tech-stack p {
                font-size: 0.9rem;
            }
        }
        @media (max-width: 480px) {
            header h1 {
                font-size: 1.5rem;
            }
            .tech-stack {
                flex-direction: column;
                align-items: center;
            }
            .tech-stack p {
                font-size: 0.8rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Blood Bank Administration System</h1>
        </div>
    </header>

    <div class="container">
        <div class="image-wrapper">
            <img src="homepage.jpg" alt="Homepage Screenshot">
        </div>
        <div class="image-wrapper">
            <img src="registration.jpg" alt="Registration Screenshot">
        </div>
        <div class="image-wrapper">
            <img src="dashboard.jpg" alt="Dashboard Screenshot">
        </div>

        <ul class="tech-stack">
            <li>
                <p>React.js</p>
            </li>
            <li>
                <p>Node.js</p>
            </li>
            <li>
                <p>Express.js</p>
            </li>
            <li>
                <p>MongoDB</p>
            </li>
            <li>
                <p>JWT</p>
            </li>
            <li>
                <p>Bcrypt</p>
            </li>
        </ul>
    </div>
</body>
</html>
