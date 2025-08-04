{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green45\blue142;\red245\green246\blue246;\red18\green34\blue46;
\red2\green53\blue226;\red116\green0\blue151;\red67\green67\blue67;\red21\green117\blue58;\red124\green148\blue183;
\red173\green71\blue4;}
{\*\expandedcolortbl;;\cssrgb\c10588\c25490\c62745;\cssrgb\c96863\c97255\c97255;\cssrgb\c8627\c17647\c23922;
\cssrgb\c0\c31765\c90980;\cssrgb\c53725\c3137\c65882;\cssrgb\c33333\c33333\c33333;\cssrgb\c5882\c52157\c29020;\cssrgb\c55686\c65098\c76863;
\cssrgb\c74118\c35686\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 wixWindow\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 'wix-window'\cf7 \strokec7 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 $w\cf7 \strokec7 .\cf8 \strokec8 onReady\cf7 \strokec7 (
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 ()\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 faqButtons\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 'Box'\cf7 \strokec7 ).\cf8 \strokec8 filter\cf7 \strokec7 (\cf5 \strokec5 btn\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf5 \strokec5 btn\cf7 \strokec7 .\cf5 \strokec5 id\cf7 \strokec7 .\cf8 \strokec8 startsWith\cf7 \strokec7 (\cf6 \strokec6 'faqButton'\cf7 \strokec7 ));\cf4 \cb1 \strokec4 \
\
\cb3     \cf5 \strokec5 faqButtons\cf7 \strokec7 .\cf8 \strokec8 forEach\cf7 \strokec7 (\cf5 \strokec5 btn\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 idx\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf5 \strokec5 btn\cf7 \strokec7 .\cf5 \strokec5 id\cf7 \strokec7 .\cf8 \strokec8 replace\cf7 \strokec7 (\cf6 \strokec6 'faqButton'\cf7 \strokec7 ,\cf4 \strokec4  \cf6 \strokec6 ''\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 box\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 `#faqBox\cf7 \strokec7 $\{\cf5 \strokec5 idx\cf7 \strokec7 \}\cf6 \strokec6 `\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 plus\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 `#plus\cf7 \strokec7 $\{\cf5 \strokec5 idx\cf7 \strokec7 \}\cf6 \strokec6 `\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 minus\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 `#minus\cf7 \strokec7 $\{\cf5 \strokec5 idx\cf7 \strokec7 \}\cf6 \strokec6 `\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\
\cb3         \cf5 \strokec5 btn\cf7 \strokec7 .\cf8 \strokec8 onClick\cf7 \strokec7 (()\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3             
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 isOpening\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf5 \strokec5 minus\cf7 \strokec7 .\cf5 \strokec5 hidden\cf7 \strokec7 ;\cf4 \strokec4  \cf9 \strokec9 // true if currently closed\cf4 \cb1 \strokec4 \
\
\cb3             \cf9 \strokec9 // Collapse all first\cf4 \cb1 \strokec4 \
\cb3             \cf5 \strokec5 faqButtons\cf7 \strokec7 .\cf8 \strokec8 forEach\cf7 \strokec7 (\cf5 \strokec5 otherBtn\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3                 
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 otherIdx\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf5 \strokec5 otherBtn\cf7 \strokec7 .\cf5 \strokec5 id\cf7 \strokec7 .\cf8 \strokec8 replace\cf7 \strokec7 (\cf6 \strokec6 'faqButton'\cf7 \strokec7 ,\cf4 \strokec4  \cf6 \strokec6 ''\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3                 
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 otherBox\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 `#faqBox\cf7 \strokec7 $\{\cf5 \strokec5 otherIdx\cf7 \strokec7 \}\cf6 \strokec6 `\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3                 
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 otherPlus\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 `#plus\cf7 \strokec7 $\{\cf5 \strokec5 otherIdx\cf7 \strokec7 \}\cf6 \strokec6 `\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3                 
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 otherMinus\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf8 \strokec8 $w\cf7 \strokec7 (\cf6 \strokec6 `#minus\cf7 \strokec7 $\{\cf5 \strokec5 otherIdx\cf7 \strokec7 \}\cf6 \strokec6 `\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\
\cb3                 \cf5 \strokec5 otherBox\cf7 \strokec7 .\cf8 \strokec8 collapse\cf7 \strokec7 (\{\cf4 \strokec4  \cf5 \strokec5 duration\cf7 \strokec7 :\cf4 \strokec4  \cf10 \strokec10 400\cf7 \strokec7 ,\cf4 \strokec4  \cf5 \strokec5 easing\cf7 \strokec7 :\cf4 \strokec4  \cf6 \strokec6 "easeOut"\cf4 \strokec4  \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 otherPlus\cf7 \strokec7 .\cf8 \strokec8 show\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 otherMinus\cf7 \strokec7 .\cf8 \strokec8 hide\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3             \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\
\cb3             \cf9 \strokec9 // Expand the clicked one if it was closed\cf4 \cb1 \strokec4 \
\cb3             
\f0\b \cf2 \strokec2 if
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 (\cf5 \strokec5 isOpening\cf7 \strokec7 )\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 box\cf7 \strokec7 .\cf8 \strokec8 expand\cf7 \strokec7 (\{\cf4 \strokec4  \cf5 \strokec5 duration\cf7 \strokec7 :\cf4 \strokec4  \cf10 \strokec10 400\cf7 \strokec7 ,\cf4 \strokec4  \cf5 \strokec5 easing\cf7 \strokec7 :\cf4 \strokec4  \cf6 \strokec6 "easeOut"\cf4 \strokec4  \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 plus\cf7 \strokec7 .\cf8 \strokec8 hide\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 minus\cf7 \strokec7 .\cf8 \strokec8 show\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\
\cb3                 \cf9 \strokec9 // Delay scroll slightly for smoother effect\cf4 \cb1 \strokec4 \
\cb3                 \cf8 \strokec8 setTimeout\cf7 \strokec7 (()\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3                     \cf5 \strokec5 btn\cf7 \strokec7 .\cf8 \strokec8 scrollTo\cf7 \strokec7 ();\cf4 \strokec4  \cf9 \strokec9 // Scrolls the page so the box is in view\cf4 \cb1 \strokec4 \
\cb3                 \cf7 \strokec7 \},\cf4 \strokec4  \cf10 \strokec10 150\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3             \cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 \});\cf4 \cb1 \strokec4 \
}