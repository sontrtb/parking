import Svg, {Rect, Path} from 'react-native-svg';
import React from 'react';

interface IMapPark {
  width: number;
}

function MapPark(props: IMapPark) {
  const {width} = props;
  return (
    <Svg
      width={width}
      height={width * 1.78}
      viewBox="0 0 1080 1920"
      fill="none">
      <Rect width="1080" height="1920" fill="white" />
      <Rect x="66" y="237" width="311" height="157" fill="#5FF07F" />
      <Rect x="66" y="863" width="311" height="157" fill="#5FF07F" />
      <Path
        d="M185.659 958H181.227L194.045 923.091H198.409L211.227 958H206.795L196.364 928.614H196.091L185.659 958ZM187.295 944.364H205.159V948.114H187.295V944.364ZM215.233 950.841V947.364L230.574 923.091H233.097V928.477H231.392L219.801 946.818V947.091H240.46V950.841H215.233ZM231.665 958V949.784V948.165V923.091H235.688V958H231.665Z"
        fill="black"
      />
      <Rect x="66" y="237" width="311" height="157" fill="#5FF07F" />
      <Rect x="66" y="1279" width="311" height="157" fill="#5FF07F" />
      <Rect x="66" y="1071" width="311" height="157" fill="#5FF07F" />
      <Rect x="66" y="445" width="311" height="157" fill="#5FF07F" />
      <Path
        d="M195.659 541H191.227L204.045 506.091H208.409L221.227 541H216.795L206.364 511.614H206.091L195.659 541ZM197.295 527.364H215.159V531.114H197.295V527.364ZM226.051 541V537.932L237.574 525.318C238.926 523.841 240.04 522.557 240.915 521.466C241.79 520.364 242.438 519.33 242.858 518.364C243.29 517.386 243.506 516.364 243.506 515.295C243.506 514.068 243.21 513.006 242.619 512.108C242.04 511.21 241.244 510.517 240.233 510.028C239.222 509.54 238.085 509.295 236.824 509.295C235.483 509.295 234.312 509.574 233.312 510.131C232.324 510.676 231.557 511.443 231.011 512.432C230.477 513.42 230.21 514.58 230.21 515.909H226.188C226.188 513.864 226.659 512.068 227.602 510.523C228.545 508.977 229.83 507.773 231.455 506.909C233.091 506.045 234.926 505.614 236.96 505.614C239.006 505.614 240.818 506.045 242.398 506.909C243.977 507.773 245.216 508.937 246.114 510.403C247.011 511.869 247.46 513.5 247.46 515.295C247.46 516.58 247.227 517.835 246.761 519.062C246.307 520.278 245.511 521.636 244.375 523.136C243.25 524.625 241.688 526.443 239.688 528.591L231.847 536.977V537.25H248.074V541H226.051Z"
        fill="black"
      />
      <Rect x="66" y="654" width="311" height="157" fill="#5FF07F" />
      <Path
        d="M186.659 745H182.227L195.045 710.091H199.409L212.227 745H207.795L197.364 715.614H197.091L186.659 745ZM188.295 731.364H206.159V735.114H188.295V731.364ZM228.847 745.477C226.597 745.477 224.591 745.091 222.83 744.318C221.08 743.545 219.688 742.472 218.653 741.097C217.631 739.71 217.074 738.102 216.983 736.273H221.278C221.369 737.398 221.756 738.369 222.438 739.188C223.119 739.994 224.011 740.619 225.114 741.062C226.216 741.506 227.438 741.727 228.778 741.727C230.278 741.727 231.608 741.466 232.767 740.943C233.926 740.42 234.835 739.693 235.494 738.761C236.153 737.83 236.483 736.75 236.483 735.523C236.483 734.239 236.165 733.108 235.528 732.131C234.892 731.142 233.96 730.369 232.733 729.812C231.506 729.256 230.006 728.977 228.233 728.977H225.438V725.227H228.233C229.619 725.227 230.835 724.977 231.881 724.477C232.938 723.977 233.761 723.273 234.352 722.364C234.955 721.455 235.256 720.386 235.256 719.159C235.256 717.977 234.994 716.949 234.472 716.074C233.949 715.199 233.21 714.517 232.256 714.028C231.313 713.54 230.199 713.295 228.915 713.295C227.71 713.295 226.574 713.517 225.506 713.96C224.449 714.392 223.585 715.023 222.915 715.852C222.244 716.67 221.881 717.659 221.824 718.818H217.733C217.801 716.989 218.352 715.386 219.386 714.011C220.42 712.625 221.773 711.545 223.443 710.773C225.125 710 226.972 709.614 228.983 709.614C231.142 709.614 232.994 710.051 234.54 710.926C236.085 711.79 237.273 712.932 238.102 714.352C238.932 715.773 239.347 717.307 239.347 718.955C239.347 720.92 238.83 722.597 237.795 723.983C236.773 725.369 235.381 726.33 233.619 726.864V727.136C235.824 727.5 237.545 728.437 238.784 729.949C240.023 731.449 240.642 733.307 240.642 735.523C240.642 737.42 240.125 739.125 239.091 740.636C238.068 742.136 236.67 743.318 234.898 744.182C233.125 745.045 231.108 745.477 228.847 745.477Z"
        fill="black"
      />
      <Path
        d="M199.659 327H195.227L208.045 292.091H212.409L225.227 327H220.795L210.364 297.614H210.091L199.659 327ZM201.295 313.364H219.159V317.114H201.295V313.364ZM240.683 292.091V327H236.456V296.523H236.251L227.729 302.182V297.886L236.456 292.091H240.683Z"
        fill="black"
      />
      <Rect x="454" y="83" width="177" height="1718" fill="#D9D9D9" />
      <Rect x="15" y="1595" width="439" height="206" fill="#D9D9D9" />
      <Path
        d="M137.455 1680.09V1715H133.227V1680.09H137.455ZM173.612 1680.09V1715H169.521L150.499 1687.59H150.158V1715H145.93V1680.09H150.021L169.112 1707.57H169.453V1680.09H173.612Z"
        fill="black"
      />
      <Path
        d="M524.682 220.545C524.682 224.227 524.017 227.409 522.688 230.091C521.358 232.773 519.534 234.841 517.216 236.295C514.898 237.75 512.25 238.477 509.273 238.477C506.295 238.477 503.648 237.75 501.33 236.295C499.011 234.841 497.188 232.773 495.858 230.091C494.528 227.409 493.864 224.227 493.864 220.545C493.864 216.864 494.528 213.682 495.858 211C497.188 208.318 499.011 206.25 501.33 204.795C503.648 203.341 506.295 202.614 509.273 202.614C512.25 202.614 514.898 203.341 517.216 204.795C519.534 206.25 521.358 208.318 522.688 211C524.017 213.682 524.682 216.864 524.682 220.545ZM520.591 220.545C520.591 217.523 520.085 214.972 519.074 212.892C518.074 210.812 516.716 209.239 515 208.17C513.295 207.102 511.386 206.568 509.273 206.568C507.159 206.568 505.244 207.102 503.528 208.17C501.824 209.239 500.466 210.812 499.455 212.892C498.455 214.972 497.955 217.523 497.955 220.545C497.955 223.568 498.455 226.119 499.455 228.199C500.466 230.278 501.824 231.852 503.528 232.92C505.244 233.989 507.159 234.523 509.273 234.523C511.386 234.523 513.295 233.989 515 232.92C516.716 231.852 518.074 230.278 519.074 228.199C520.085 226.119 520.591 223.568 520.591 220.545ZM554.699 203.091H558.926V226.205C558.926 228.591 558.364 230.722 557.239 232.597C556.125 234.46 554.551 235.932 552.517 237.011C550.483 238.08 548.097 238.614 545.358 238.614C542.619 238.614 540.233 238.08 538.199 237.011C536.165 235.932 534.585 234.46 533.46 232.597C532.347 230.722 531.79 228.591 531.79 226.205V203.091H536.017V225.864C536.017 227.568 536.392 229.085 537.142 230.415C537.892 231.733 538.96 232.773 540.347 233.534C541.744 234.284 543.415 234.659 545.358 234.659C547.301 234.659 548.972 234.284 550.369 233.534C551.767 232.773 552.835 231.733 553.574 230.415C554.324 229.085 554.699 227.568 554.699 225.864V203.091ZM565.459 206.841V203.091H591.641V206.841H580.663V238H576.436V206.841H565.459Z"
        fill="black"
      />
      <Path
        d="M195.659 1162H191.227L204.045 1127.09H208.409L221.227 1162H216.795L206.364 1132.61H206.091L195.659 1162ZM197.295 1148.36H215.159V1152.11H197.295V1148.36ZM236.96 1162.48C234.96 1162.48 233.159 1162.08 231.557 1161.28C229.955 1160.49 228.67 1159.4 227.705 1158.01C226.739 1156.62 226.21 1155.05 226.119 1153.27H230.21C230.369 1154.85 231.085 1156.16 232.358 1157.19C233.642 1158.22 235.176 1158.73 236.96 1158.73C238.392 1158.73 239.665 1158.39 240.778 1157.72C241.903 1157.05 242.784 1156.13 243.42 1154.96C244.068 1153.78 244.392 1152.44 244.392 1150.95C244.392 1149.43 244.057 1148.07 243.386 1146.88C242.727 1145.68 241.818 1144.73 240.659 1144.03C239.5 1143.34 238.176 1142.99 236.688 1142.98C235.619 1142.97 234.523 1143.13 233.398 1143.47C232.273 1143.8 231.347 1144.23 230.619 1144.75L226.665 1144.27L228.778 1127.09H246.915V1130.84H232.324L231.097 1141.14H231.301C232.017 1140.57 232.915 1140.1 233.994 1139.72C235.074 1139.35 236.199 1139.16 237.369 1139.16C239.506 1139.16 241.409 1139.67 243.08 1140.69C244.761 1141.7 246.08 1143.09 247.034 1144.85C248 1146.61 248.483 1148.62 248.483 1150.89C248.483 1153.11 247.983 1155.1 246.983 1156.85C245.994 1158.59 244.631 1159.97 242.892 1160.98C241.153 1161.98 239.176 1162.48 236.96 1162.48Z"
        fill="black"
      />
      <Path
        d="M195.659 1370H191.227L204.045 1335.09H208.409L221.227 1370H216.795L206.364 1340.61H206.091L195.659 1370ZM197.295 1356.36H215.159V1360.11H197.295V1356.36ZM237.642 1370.48C236.21 1370.45 234.778 1370.18 233.347 1369.66C231.915 1369.14 230.608 1368.26 229.426 1367.02C228.244 1365.77 227.295 1364.08 226.58 1361.95C225.864 1359.82 225.506 1357.14 225.506 1353.91C225.506 1350.82 225.795 1348.08 226.375 1345.69C226.955 1343.3 227.795 1341.28 228.898 1339.64C230 1337.99 231.33 1336.74 232.886 1335.89C234.455 1335.04 236.222 1334.61 238.188 1334.61C240.142 1334.61 241.881 1335.01 243.403 1335.79C244.938 1336.56 246.188 1337.64 247.153 1339.03C248.119 1340.41 248.744 1342.01 249.028 1343.82H244.869C244.483 1342.25 243.733 1340.95 242.619 1339.91C241.506 1338.88 240.028 1338.36 238.188 1338.36C235.483 1338.36 233.352 1339.54 231.795 1341.89C230.25 1344.24 229.472 1347.55 229.46 1351.8H229.733C230.369 1350.83 231.125 1350.01 232 1349.32C232.886 1348.63 233.864 1348.1 234.932 1347.72C236 1347.35 237.131 1347.16 238.324 1347.16C240.324 1347.16 242.153 1347.66 243.812 1348.66C245.472 1349.65 246.801 1351.02 247.801 1352.77C248.801 1354.51 249.301 1356.5 249.301 1358.75C249.301 1360.91 248.818 1362.89 247.852 1364.68C246.886 1366.47 245.528 1367.89 243.778 1368.94C242.04 1369.99 239.994 1370.5 237.642 1370.48ZM237.642 1366.73C239.074 1366.73 240.358 1366.37 241.494 1365.65C242.642 1364.94 243.545 1363.98 244.205 1362.77C244.875 1361.57 245.21 1360.23 245.21 1358.75C245.21 1357.31 244.886 1355.99 244.239 1354.81C243.602 1353.62 242.722 1352.67 241.597 1351.97C240.483 1351.26 239.21 1350.91 237.778 1350.91C236.699 1350.91 235.693 1351.12 234.761 1351.56C233.83 1351.98 233.011 1352.56 232.307 1353.3C231.614 1354.03 231.068 1354.88 230.67 1355.84C230.273 1356.78 230.074 1357.77 230.074 1358.82C230.074 1360.2 230.398 1361.5 231.045 1362.7C231.705 1363.91 232.602 1364.88 233.739 1365.62C234.886 1366.36 236.188 1366.73 237.642 1366.73Z"
        fill="black"
      />
      <Rect x="706" y="237" width="311" height="157" fill="#5FF07F" />
      <Rect x="706" y="863" width="311" height="157" fill="#5FF07F" />
      <Path
        d="M824.227 958V923.091H836.432C838.864 923.091 840.869 923.511 842.449 924.352C844.028 925.182 845.205 926.301 845.977 927.71C846.75 929.108 847.136 930.659 847.136 932.364C847.136 933.864 846.869 935.102 846.335 936.08C845.813 937.057 845.119 937.83 844.256 938.398C843.403 938.966 842.477 939.386 841.477 939.659V940C842.545 940.068 843.619 940.443 844.699 941.125C845.778 941.807 846.682 942.784 847.409 944.057C848.136 945.33 848.5 946.886 848.5 948.727C848.5 950.477 848.102 952.051 847.307 953.449C846.511 954.847 845.256 955.955 843.54 956.773C841.824 957.591 839.591 958 836.841 958H824.227ZM828.455 954.25H836.841C839.602 954.25 841.563 953.716 842.722 952.648C843.892 951.568 844.477 950.261 844.477 948.727C844.477 947.545 844.176 946.455 843.574 945.455C842.972 944.443 842.114 943.636 841 943.034C839.886 942.42 838.568 942.114 837.045 942.114H828.455V954.25ZM828.455 938.432H836.295C837.568 938.432 838.716 938.182 839.739 937.682C840.773 937.182 841.591 936.477 842.193 935.568C842.807 934.659 843.114 933.591 843.114 932.364C843.114 930.83 842.58 929.528 841.511 928.46C840.443 927.381 838.75 926.841 836.432 926.841H828.455V938.432ZM854.014 950.841V947.364L869.355 923.091H871.878V928.477H870.173L858.582 946.818V947.091H879.241V950.841H854.014ZM870.446 958V949.784V948.165V923.091H874.469V958H870.446Z"
        fill="black"
      />
      <Rect x="706" y="237" width="311" height="157" fill="#5FF07F" />
      <Rect x="706" y="1279" width="311" height="157" fill="#5FF07F" />
      <Rect x="706" y="1279" width="311" height="157" fill="#5FF07F" />
      <Rect x="706" y="1071" width="311" height="157" fill="#5FF07F" />
      <Rect x="706" y="445" width="311" height="157" fill="#5FF07F" />
      <Path
        d="M834.227 541V506.091H846.432C848.864 506.091 850.869 506.511 852.449 507.352C854.028 508.182 855.205 509.301 855.977 510.71C856.75 512.108 857.136 513.659 857.136 515.364C857.136 516.864 856.869 518.102 856.335 519.08C855.813 520.057 855.119 520.83 854.256 521.398C853.403 521.966 852.477 522.386 851.477 522.659V523C852.545 523.068 853.619 523.443 854.699 524.125C855.778 524.807 856.682 525.784 857.409 527.057C858.136 528.33 858.5 529.886 858.5 531.727C858.5 533.477 858.102 535.051 857.307 536.449C856.511 537.847 855.256 538.955 853.54 539.773C851.824 540.591 849.591 541 846.841 541H834.227ZM838.455 537.25H846.841C849.602 537.25 851.563 536.716 852.722 535.648C853.892 534.568 854.477 533.261 854.477 531.727C854.477 530.545 854.176 529.455 853.574 528.455C852.972 527.443 852.114 526.636 851 526.034C849.886 525.42 848.568 525.114 847.045 525.114H838.455V537.25ZM838.455 521.432H846.295C847.568 521.432 848.716 521.182 849.739 520.682C850.773 520.182 851.591 519.477 852.193 518.568C852.807 517.659 853.114 516.591 853.114 515.364C853.114 513.83 852.58 512.528 851.511 511.46C850.443 510.381 848.75 509.841 846.432 509.841H838.455V521.432ZM864.832 541V537.932L876.355 525.318C877.707 523.841 878.821 522.557 879.696 521.466C880.571 520.364 881.219 519.33 881.639 518.364C882.071 517.386 882.287 516.364 882.287 515.295C882.287 514.068 881.991 513.006 881.401 512.108C880.821 511.21 880.026 510.517 879.014 510.028C878.003 509.54 876.866 509.295 875.605 509.295C874.264 509.295 873.094 509.574 872.094 510.131C871.105 510.676 870.338 511.443 869.793 512.432C869.259 513.42 868.991 514.58 868.991 515.909H864.969C864.969 513.864 865.44 512.068 866.384 510.523C867.327 508.977 868.611 507.773 870.236 506.909C871.872 506.045 873.707 505.614 875.741 505.614C877.787 505.614 879.599 506.045 881.179 506.909C882.759 507.773 883.997 508.937 884.895 510.403C885.793 511.869 886.241 513.5 886.241 515.295C886.241 516.58 886.009 517.835 885.543 519.062C885.088 520.278 884.293 521.636 883.156 523.136C882.031 524.625 880.469 526.443 878.469 528.591L870.628 536.977V537.25H886.855V541H864.832Z"
        fill="black"
      />
      <Rect x="706" y="654" width="311" height="157" fill="#5FF07F" />
      <Path
        d="M825.227 745V710.091H837.432C839.864 710.091 841.869 710.511 843.449 711.352C845.028 712.182 846.205 713.301 846.977 714.71C847.75 716.108 848.136 717.659 848.136 719.364C848.136 720.864 847.869 722.102 847.335 723.08C846.813 724.057 846.119 724.83 845.256 725.398C844.403 725.966 843.477 726.386 842.477 726.659V727C843.545 727.068 844.619 727.443 845.699 728.125C846.778 728.807 847.682 729.784 848.409 731.057C849.136 732.33 849.5 733.886 849.5 735.727C849.5 737.477 849.102 739.051 848.307 740.449C847.511 741.847 846.256 742.955 844.54 743.773C842.824 744.591 840.591 745 837.841 745H825.227ZM829.455 741.25H837.841C840.602 741.25 842.563 740.716 843.722 739.648C844.892 738.568 845.477 737.261 845.477 735.727C845.477 734.545 845.176 733.455 844.574 732.455C843.972 731.443 843.114 730.636 842 730.034C840.886 729.42 839.568 729.114 838.045 729.114H829.455V741.25ZM829.455 725.432H837.295C838.568 725.432 839.716 725.182 840.739 724.682C841.773 724.182 842.591 723.477 843.193 722.568C843.807 721.659 844.114 720.591 844.114 719.364C844.114 717.83 843.58 716.528 842.511 715.46C841.443 714.381 839.75 713.841 837.432 713.841H829.455V725.432ZM867.628 745.477C865.378 745.477 863.372 745.091 861.611 744.318C859.861 743.545 858.469 742.472 857.435 741.097C856.412 739.71 855.855 738.102 855.764 736.273H860.06C860.151 737.398 860.537 738.369 861.219 739.188C861.901 739.994 862.793 740.619 863.895 741.062C864.997 741.506 866.219 741.727 867.56 741.727C869.06 741.727 870.389 741.466 871.548 740.943C872.707 740.42 873.616 739.693 874.276 738.761C874.935 737.83 875.264 736.75 875.264 735.523C875.264 734.239 874.946 733.108 874.31 732.131C873.673 731.142 872.741 730.369 871.514 729.812C870.287 729.256 868.787 728.977 867.014 728.977H864.219V725.227H867.014C868.401 725.227 869.616 724.977 870.662 724.477C871.719 723.977 872.543 723.273 873.134 722.364C873.736 721.455 874.037 720.386 874.037 719.159C874.037 717.977 873.776 716.949 873.253 716.074C872.73 715.199 871.991 714.517 871.037 714.028C870.094 713.54 868.98 713.295 867.696 713.295C866.491 713.295 865.355 713.517 864.287 713.96C863.23 714.392 862.366 715.023 861.696 715.852C861.026 716.67 860.662 717.659 860.605 718.818H856.514C856.582 716.989 857.134 715.386 858.168 714.011C859.202 712.625 860.554 711.545 862.224 710.773C863.906 710 865.753 709.614 867.764 709.614C869.923 709.614 871.776 710.051 873.321 710.926C874.866 711.79 876.054 712.932 876.884 714.352C877.713 715.773 878.128 717.307 878.128 718.955C878.128 720.92 877.611 722.597 876.577 723.983C875.554 725.369 874.162 726.33 872.401 726.864V727.136C874.605 727.5 876.327 728.437 877.565 729.949C878.804 731.449 879.423 733.307 879.423 735.523C879.423 737.42 878.906 739.125 877.872 740.636C876.849 742.136 875.452 743.318 873.679 744.182C871.906 745.045 869.889 745.477 867.628 745.477Z"
        fill="black"
      />
      <Path
        d="M838.227 327V292.091H850.432C852.864 292.091 854.869 292.511 856.449 293.352C858.028 294.182 859.205 295.301 859.977 296.71C860.75 298.108 861.136 299.659 861.136 301.364C861.136 302.864 860.869 304.102 860.335 305.08C859.813 306.057 859.119 306.83 858.256 307.398C857.403 307.966 856.477 308.386 855.477 308.659V309C856.545 309.068 857.619 309.443 858.699 310.125C859.778 310.807 860.682 311.784 861.409 313.057C862.136 314.33 862.5 315.886 862.5 317.727C862.5 319.477 862.102 321.051 861.307 322.449C860.511 323.847 859.256 324.955 857.54 325.773C855.824 326.591 853.591 327 850.841 327H838.227ZM842.455 323.25H850.841C853.602 323.25 855.563 322.716 856.722 321.648C857.892 320.568 858.477 319.261 858.477 317.727C858.477 316.545 858.176 315.455 857.574 314.455C856.972 313.443 856.114 312.636 855 312.034C853.886 311.42 852.568 311.114 851.045 311.114H842.455V323.25ZM842.455 307.432H850.295C851.568 307.432 852.716 307.182 853.739 306.682C854.773 306.182 855.591 305.477 856.193 304.568C856.807 303.659 857.114 302.591 857.114 301.364C857.114 299.83 856.58 298.528 855.511 297.46C854.443 296.381 852.75 295.841 850.432 295.841H842.455V307.432ZM881.105 292.091V327H876.878V296.523H876.673L868.151 302.182V297.886L876.878 292.091H881.105Z"
        fill="black"
      />
      <Path
        d="M834.227 1162V1127.09H846.432C848.864 1127.09 850.869 1127.51 852.449 1128.35C854.028 1129.18 855.205 1130.3 855.977 1131.71C856.75 1133.11 857.136 1134.66 857.136 1136.36C857.136 1137.86 856.869 1139.1 856.335 1140.08C855.813 1141.06 855.119 1141.83 854.256 1142.4C853.403 1142.97 852.477 1143.39 851.477 1143.66V1144C852.545 1144.07 853.619 1144.44 854.699 1145.12C855.778 1145.81 856.682 1146.78 857.409 1148.06C858.136 1149.33 858.5 1150.89 858.5 1152.73C858.5 1154.48 858.102 1156.05 857.307 1157.45C856.511 1158.85 855.256 1159.95 853.54 1160.77C851.824 1161.59 849.591 1162 846.841 1162H834.227ZM838.455 1158.25H846.841C849.602 1158.25 851.563 1157.72 852.722 1156.65C853.892 1155.57 854.477 1154.26 854.477 1152.73C854.477 1151.55 854.176 1150.45 853.574 1149.45C852.972 1148.44 852.114 1147.64 851 1147.03C849.886 1146.42 848.568 1146.11 847.045 1146.11H838.455V1158.25ZM838.455 1142.43H846.295C847.568 1142.43 848.716 1142.18 849.739 1141.68C850.773 1141.18 851.591 1140.48 852.193 1139.57C852.807 1138.66 853.114 1137.59 853.114 1136.36C853.114 1134.83 852.58 1133.53 851.511 1132.46C850.443 1131.38 848.75 1130.84 846.432 1130.84H838.455V1142.43ZM876.423 1162.48C874.991 1162.45 873.56 1162.18 872.128 1161.66C870.696 1161.14 869.389 1160.26 868.207 1159.02C867.026 1157.77 866.077 1156.08 865.361 1153.95C864.645 1151.82 864.287 1149.14 864.287 1145.91C864.287 1142.82 864.577 1140.08 865.156 1137.69C865.736 1135.3 866.577 1133.28 867.679 1131.64C868.781 1129.99 870.111 1128.74 871.668 1127.89C873.236 1127.04 875.003 1126.61 876.969 1126.61C878.923 1126.61 880.662 1127.01 882.185 1127.79C883.719 1128.56 884.969 1129.64 885.935 1131.03C886.901 1132.41 887.526 1134.01 887.81 1135.82H883.651C883.264 1134.25 882.514 1132.95 881.401 1131.91C880.287 1130.88 878.81 1130.36 876.969 1130.36C874.264 1130.36 872.134 1131.54 870.577 1133.89C869.031 1136.24 868.253 1139.55 868.241 1143.8H868.514C869.151 1142.83 869.906 1142.01 870.781 1141.32C871.668 1140.63 872.645 1140.1 873.713 1139.72C874.781 1139.35 875.912 1139.16 877.105 1139.16C879.105 1139.16 880.935 1139.66 882.594 1140.66C884.253 1141.65 885.582 1143.02 886.582 1144.77C887.582 1146.51 888.082 1148.5 888.082 1150.75C888.082 1152.91 887.599 1154.89 886.634 1156.68C885.668 1158.47 884.31 1159.89 882.56 1160.94C880.821 1161.99 878.776 1162.5 876.423 1162.48ZM876.423 1158.73C877.855 1158.73 879.139 1158.37 880.276 1157.65C881.423 1156.94 882.327 1155.98 882.986 1154.77C883.656 1153.57 883.991 1152.23 883.991 1150.75C883.991 1149.31 883.668 1147.99 883.02 1146.81C882.384 1145.62 881.503 1144.67 880.378 1143.97C879.264 1143.26 877.991 1142.91 876.56 1142.91C875.48 1142.91 874.474 1143.12 873.543 1143.56C872.611 1143.98 871.793 1144.56 871.088 1145.3C870.395 1146.03 869.849 1146.88 869.452 1147.84C869.054 1148.78 868.855 1149.77 868.855 1150.82C868.855 1152.2 869.179 1153.5 869.827 1154.7C870.486 1155.91 871.384 1156.88 872.52 1157.62C873.668 1158.36 874.969 1158.73 876.423 1158.73Z"
        fill="black"
      />
      <Path
        d="M834.227 1370V1335.09H846.432C848.864 1335.09 850.869 1335.51 852.449 1336.35C854.028 1337.18 855.205 1338.3 855.977 1339.71C856.75 1341.11 857.136 1342.66 857.136 1344.36C857.136 1345.86 856.869 1347.1 856.335 1348.08C855.813 1349.06 855.119 1349.83 854.256 1350.4C853.403 1350.97 852.477 1351.39 851.477 1351.66V1352C852.545 1352.07 853.619 1352.44 854.699 1353.12C855.778 1353.81 856.682 1354.78 857.409 1356.06C858.136 1357.33 858.5 1358.89 858.5 1360.73C858.5 1362.48 858.102 1364.05 857.307 1365.45C856.511 1366.85 855.256 1367.95 853.54 1368.77C851.824 1369.59 849.591 1370 846.841 1370H834.227ZM838.455 1366.25H846.841C849.602 1366.25 851.563 1365.72 852.722 1364.65C853.892 1363.57 854.477 1362.26 854.477 1360.73C854.477 1359.55 854.176 1358.45 853.574 1357.45C852.972 1356.44 852.114 1355.64 851 1355.03C849.886 1354.42 848.568 1354.11 847.045 1354.11H838.455V1366.25ZM838.455 1350.43H846.295C847.568 1350.43 848.716 1350.18 849.739 1349.68C850.773 1349.18 851.591 1348.48 852.193 1347.57C852.807 1346.66 853.114 1345.59 853.114 1344.36C853.114 1342.83 852.58 1341.53 851.511 1340.46C850.443 1339.38 848.75 1338.84 846.432 1338.84H838.455V1350.43ZM865.923 1370L881.537 1339.11V1338.84H863.537V1335.09H885.901V1339.05L870.355 1370H865.923Z"
        fill="black"
      />
      <Path
        d="M268.331 1696.1L225.294 1722.93L225.872 1668.37L268.331 1696.1Z"
        fill="#B34848"
      />
      <Path
        d="M539.703 132.301L567.177 174.927L512.617 175.174L539.703 132.301Z"
        fill="#B34848"
      />
    </Svg>
  );
}

export default MapPark;