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