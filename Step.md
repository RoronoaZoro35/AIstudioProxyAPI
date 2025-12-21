1. 初始化
export PATH="$HOME/.local/bin:$PATH"
poetry env activate
poetry install

2. 保存auth文件
poetry run python launch_camoufox.py --debug
python launch_camoufox.py --debug

3. docker更新
cd docker
bash update.sh


python3 -m venv venv
source venv/bin/activate


    # 添加CORS中间件，允许所有来源访问
    from fastapi.middleware.cors import CORSMiddleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # 允许所有来源，包括app://obsidian.md
        allow_credentials=True,
        allow_methods=["*"],  # 允许所有HTTP方法
        allow_headers=["*"],  # 允许所有请求头
    )


    