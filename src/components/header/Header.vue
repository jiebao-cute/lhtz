<template>
    <div class="header">
        <div class="logo">
            <div class="icons">
                <i class="el-icon-s-data "></i>
                <span id="font">Kooyfin</span>
            </div>
            <div class="icons"><i class="el-icon-s-fold "></i></div>
        </div>
        <div class="user-info">
            <div class="button-logou">
                <el-button class="button help">帮助</el-button>
                <el-button type="primary" class="button">免费注册</el-button>
            </div>
            <div class="icons">
                <i class="el-icon-s-fold"> </i>
                <span id="sinup">Sinup</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    border-bottom: 1px solid #999;
    cursor: pointer;
    background-color: #303133;

    .logo {
        width: 200px;
        text-align: center;
        color: #FFFFFf;
        cursor: pointer;

        .icons {
            display: inline;
            padding: 0 10px;
            vertical-align: middle;

            .el-icon-s-fold {
                margin: 0 10px;
                padding: 0 10px;
            }
        }
    }

    .user-info {
        display: flex;
        justify-content: space-between;
        text-align: center;

        .button-logou {
            margin: 0 10px;

            .help {
                background: #909399;
                border-color: #909399;
                color: #ffff;
            }

            .button {
                line-height: 8px;
            }
        }

        .icons {
            margin-left: 30px;
            padding: 0 20px;
            color: #FFFFFf;
            display: inline;
            vertical-align: middle;

            .sinup {
                display: inline-block;

            }
        }


    }
}
</style>