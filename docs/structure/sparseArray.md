# 稀疏数组

稀疏数组的应用场景是:当普通数组中无效数据量
远远大于有效数据量时,可以用稀疏数组对数组进行压缩。

```java 
class SpaceArray {

    public int[][] originArray;

    //   生产一个二维数组
    public int[][] initProducer(int n) {
        int[][] block = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                block[i][j] = Math.random() > 0.5 ? 1 : 0;
            }
        }
        return block;
    }

    //    初始化
    public void init(int n) {
        originArray = this.initProducer(n);
        for (int[] row : originArray) {
            for (int v : row) {
                System.out.printf(" %d ", v);
            }
            System.out.print("\n");
        }
    }

    //    使用数组压缩稀疏数组
    public int[][] useArrayGenOriginArray() {
        // 计算总的有效数据
        int sum = 0;

        for (int[] row : originArray) {
            for (int v : row) {
                if (v != 0) {
                    sum++;
                }
            }
        }
        // sum就是总数
        int[][] result = new int[sum + 1][3];
        result[0] = new int[]{originArray.length, originArray.length, 3};
        int top = 0;
        for (int i = 0; i < originArray.length; i++) {
            for (int j = 0; j < originArray[i].length; j++) {
                if (originArray[i][j] != 0) {
                    top++;
                    result[top] = new int[]{i, j, originArray[i][j]};
                }
            }
        }

        for (int[] row : result) {
            for (int v : row) {
                System.out.printf(" %d ", v);
            }
            System.out.print("\n");
        }
        return null;
    }


    // 使用链表压缩稀疏数组
    public void useLinkedListGenOriginArray() {

        class SparseNode {
            int row = 0;
            int col = 0;
            int value = 0;
            SparseNode next;

            public SparseNode(int row, int col, int v) {
                this.row = row;
                this.col = col;
                this.value = v;
            }

            @Override
            public String toString() {
                return "SparseNode{" +
                        "row=" + row +
                        ", col=" + col +
                        ", value=" + value +
                        '}';
            }
        }

//        计算有效数据
        int sum = 0;
        for (int[] row : originArray) {
            for (int v : row) {
                if (v != 0) {
                    sum++;
                }
            }
        }
        SparseNode headNode = new SparseNode(originArray.length, originArray.length, sum);
        SparseNode tmp = headNode;
        for (int i = 0; i < originArray.length; i++) {
            for (int j = 0; j < originArray[i].length; j++) {
                if (originArray[i][j] != 0) {
                    tmp.next = new SparseNode(i, j, originArray[i][j]);
                    tmp = tmp.next;
                }
            }
        }

        // 打印链表
        tmp = headNode;
        while (true){
            if(tmp.next == null){
                break;
            }
            System.out.println(tmp);
            tmp = tmp .next;
        }
    }

    public static void main(String[] args) {
        SpaceArray spaceArray = new SpaceArray();
        // 生产一个十乘十的二维数组
        spaceArray.init(10);
        // 转为稀疏数组
//        spaceArray.useArrayGenOriginArray();
        spaceArray.useLinkedListGenOriginArray();
    }
}
```