const router = require('express').Router();
const homeController = require('../controllers').home;
const memberController = require('../controllers').member;
const categoryController = require('../controllers').category;
const bookController = require('../controllers').book;
const loanController = require('../controllers').loan;
const userController = require('../controllers').user;
const reportController = require('../controllers').report;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, homeController.home);
// Member
router.get('/member', verifyUser.isLogin, memberController.list);
router.post('/member/save', verifyUser.isLogin, memberController.save);
router.post('/member/update', verifyUser.isLogin, memberController.update);
router.post('/member/delete', verifyUser.isLogin, memberController.delete);
// Category
router.get('/category', verifyUser.isLogin, categoryController.list);
router.post('/category/save', verifyUser.isLogin, categoryController.save);
router.post('/category/update', verifyUser.isLogin, categoryController.update);
router.post('/category/delete', verifyUser.isLogin, categoryController.delete);
// Book
router.get('/book', verifyUser.isLogin, bookController.list);
router.post('/book/save', verifyUser.isLogin, bookController.save);
router.post('/book/update', verifyUser.isLogin, bookController.update);
router.post('/book/delete', verifyUser.isLogin, bookController.delete);
// User
router.get('/user', verifyUser.isLogin, userController.list);
router.post('/user/delete', verifyUser.isLogin, userController.delete);
// Loan
router.get('/loan', verifyUser.isLogin, loanController.list);
router.post('/loan/save', verifyUser.isLogin, loanController.save);
router.post('/loan/temp', verifyUser.isLogin, loanController.temp);
router.post('/loan/update', verifyUser.isLogin, loanController.updateList);
router.post('/loan/delete', verifyUser.isLogin, loanController.deleteAll);
router.post('/loan/deletetemp', verifyUser.isLogin, loanController.deleteTemp);
router.get('/loan/new/:id', verifyUser.isLogin, loanController.new);
// Report
router.get('/report', verifyUser.isLogin, reportController.list);
router.get('/report/member-report', verifyUser.isLogin, reportController.member);
router.get('/report/book-report', verifyUser.isLogin, reportController.book);
router.get('/report/loan-report', verifyUser.isLogin, reportController.loan);
router.get('/report/faktur/:id', verifyUser.isLogin, reportController.faktur);

module.exports = router;
