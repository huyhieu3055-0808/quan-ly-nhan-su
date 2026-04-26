// =============================================
//  NHÓM 1 HR — app.js (Multi-page version)
// =============================================

// ── ROBOT SVG ─────────────────────────────────
function buildRobot(size) {
  size = size || 34;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">'
    +'<rect x="17" y="1" width="2" height="5" rx="1" fill="#0078D4"/>'
    +'<circle cx="18" cy="1" r="2" fill="#00A86B"/>'
    +'<rect x="7" y="6" width="22" height="16" rx="4" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.2"/>'
    +'<rect x="10" y="10" width="5" height="5" rx="1.5" fill="#0078D4" opacity="0.9"/>'
    +'<rect x="21" y="10" width="5" height="5" rx="1.5" fill="#0078D4" opacity="0.9"/>'
    +'<rect x="11" y="11" width="2" height="2" rx="0.5" fill="white" opacity="0.8"/>'
    +'<rect x="22" y="11" width="2" height="2" rx="0.5" fill="white" opacity="0.8"/>'
    +'<rect x="12" y="18" width="12" height="2" rx="1" fill="#00A86B" opacity="0.8"/>'
    +'<rect x="16" y="22" width="4" height="3" rx="1" fill="#EFF6FF" stroke="#0078D4" stroke-width="0.8"/>'
    +'<rect x="6" y="25" width="24" height="10" rx="4" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.2"/>'
    +'<circle cx="13" cy="30" r="2" fill="#7C3AED" opacity="0.9"/>'
    +'<circle cx="18" cy="30" r="2" fill="#0078D4" opacity="0.9"/>'
    +'<circle cx="23" cy="30" r="2" fill="#00A86B" opacity="0.9"/>'
    +'<rect x="1" y="26" width="5" height="7" rx="2.5" fill="#EFF6FF" stroke="#0078D4" stroke-width="1"/>'
    +'<rect x="30" y="26" width="5" height="7" rx="2.5" fill="#EFF6FF" stroke="#0078D4" stroke-width="1"/>'
    +'</svg>';
}

function buildRobotLarge(size) {
  size = size || 100;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">'
    +'<rect x="47" y="2" width="6" height="16" rx="3" fill="#0078D4"/>'
    +'<circle cx="50" cy="2" r="6" fill="#00A86B" opacity="0.9"/>'
    +'<circle cx="50" cy="2" r="3" fill="white" opacity="0.5"/>'
    +'<rect x="18" y="18" width="64" height="46" rx="12" fill="#EFF6FF" stroke="#0078D4" stroke-width="2"/>'
    +'<rect x="20" y="20" width="60" height="42" rx="10" fill="none" stroke="rgba(0,120,212,0.15)" stroke-width="1"/>'
    +'<rect x="26" y="28" width="18" height="16" rx="5" fill="white"/>'
    +'<rect x="28" y="30" width="14" height="12" rx="4" fill="#0078D4" opacity="0.85"/>'
    +'<rect x="32" y="33" width="5" height="5" rx="2" fill="white" opacity="0.6"/>'
    +'<rect x="56" y="28" width="18" height="16" rx="5" fill="white"/>'
    +'<rect x="58" y="30" width="14" height="12" rx="4" fill="#0078D4" opacity="0.85"/>'
    +'<rect x="62" y="33" width="5" height="5" rx="2" fill="white" opacity="0.6"/>'
    +'<rect x="32" y="52" width="36" height="5" rx="2.5" fill="white"/>'
    +'<rect x="34" y="53" width="8" height="3" rx="1.5" fill="#00A86B"/>'
    +'<rect x="44" y="53" width="8" height="3" rx="1.5" fill="#0078D4"/>'
    +'<rect x="54" y="53" width="8" height="3" rx="1.5" fill="#7C3AED"/>'
    +'<rect x="44" y="64" width="12" height="10" rx="3" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.5"/>'
    +'<rect x="12" y="74" width="76" height="40" rx="12" fill="#EFF6FF" stroke="#0078D4" stroke-width="2"/>'
    +'<rect x="22" y="82" width="56" height="24" rx="6" fill="white" stroke="rgba(0,120,212,0.2)" stroke-width="1"/>'
    +'<circle cx="36" cy="94" r="5" fill="#7C3AED" opacity="0.9"/>'
    +'<circle cx="36" cy="94" r="2" fill="white" opacity="0.5"/>'
    +'<circle cx="50" cy="94" r="5" fill="#0078D4" opacity="0.9"/>'
    +'<circle cx="50" cy="94" r="2" fill="white" opacity="0.5"/>'
    +'<circle cx="64" cy="94" r="5" fill="#00A86B" opacity="0.9"/>'
    +'<circle cx="64" cy="94" r="2" fill="white" opacity="0.5"/>'
    +'<rect x="0" y="76" width="12" height="26" rx="6" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.5"/>'
    +'<circle cx="6" cy="104" r="4" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.5"/>'
    +'<rect x="88" y="76" width="12" height="26" rx="6" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.5"/>'
    +'<circle cx="94" cy="104" r="4" fill="#EFF6FF" stroke="#0078D4" stroke-width="1.5"/>'
    +'</svg>';
}

function initRobots() {
  var small = buildRobot(34);
  ['loginNavRobot','homeNavRobot','dashNavRobot','footerRobot'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.innerHTML = small;
  });
  var lb = document.getElementById('loginBigRobot');
  if (lb) lb.innerHTML = buildRobotLarge(90);
  var hb = document.getElementById('heroRobotBig');
  if (hb) hb.innerHTML = buildRobotLarge(110);
}

// ── DATA ──────────────────────────────────────
var currentUser = JSON.parse(localStorage.getItem('nhom1_user'));

var roleData = {
  admin: { bar:'cyan', badge:'cyan', title:'Admin — Quản Trị Viên', desc:'Toàn quyền quản lý hệ thống, nhân sự, công việc và báo cáo.', perms:['Quản lý toàn bộ người dùng & phân quyền','Cấu hình hệ thống toàn cục','Xem & xuất mọi báo cáo','Quản lý nhân sự & hợp đồng','Xử lý lương thưởng & phúc lợi'] },
  manager: { bar:'purple', badge:'purple', title:'Manager — Quản Lý', desc:'Quản lý công việc nhóm, phân công nhiệm vụ và theo dõi tiến độ.', perms:['Tạo & phân công nhiệm vụ cho nhóm','Theo dõi tiến độ công việc nhóm','Duyệt / từ chối đơn nghỉ phép','Xem báo cáo hiệu suất nhóm'] },
  employee: { bar:'green', badge:'green', title:'Employee — Nhân Viên', desc:'Xem và cập nhật công việc cá nhân, chấm công và xin nghỉ phép.', perms:['Xem danh sách công việc được giao','Cập nhật tiến độ công việc','Chấm công vào / ra hằng ngày','Nộp đơn xin nghỉ phép'] },
  guest: { bar:'orange', badge:'orange', title:'Guest — Khách', desc:'Có thể xem trang chủ và tìm hiểu hệ thống.', perms:['Xem trang chủ & giới thiệu hệ thống','Đăng ký tài khoản mới'] }
};

var quickItems = {
  admin:   [{i:"<i class='bx bx-group'></i>",l:'Nhân Sự', act:'sb-emp'},{i:"<i class='bx bx-building-house'></i>",l:'Phòng Ban', act:'sb-dept'},{i:"<i class='bx bx-task'></i>",l:'Công Việc', act:'sb-task'},{i:"<i class='bx bx-money'></i>",l:'Bảng Lương', act:'sb-salary'}],
  manager: [{i:"<i class='bx bx-task'></i>",l:'Công Việc', act:'sb-task'},{i:"<i class='bx bx-group'></i>",l:'Nhóm Của Tôi', act:'sb-emp'},{i:"<i class='bx bx-check-square'></i>",l:'Duyệt Phép', act:'sb-leave'},{i:"<i class='bx bx-cog'></i>",l:'Cài Đặt', act:'none'}],
  employee:[{i:"<i class='bx bx-clipboard'></i>",l:'Công Việc', act:'sb-task'},{i:"<i class='bx bx-calendar-x'></i>",l:'Nghỉ Phép', act:'sb-leave'},{i:"<i class='bx bx-time-five'></i>",l:'Chấm Công', act:'none'},{i:"<i class='bx bx-user'></i>",l:'Hồ Sơ', act:'none'}],
  guest:   [{i:"<i class='bx bx-home'></i>",l:'Trang Chủ', act:'sb-home'},{i:"<i class='bx bx-log-in'></i>",l:'Đăng Nhập', act:'login'},{i:"<i class='bx bx-info-circle'></i>",l:'Giới Thiệu', act:'none'},{i:"<i class='bx bx-support'></i>",l:'Hỗ Trợ', act:'none'}]
};

var sidebarMenus = {
  admin:[
    {label:'CHÍNH',items:[
      {i:"<i class='bx bx-home'></i>",n:'Tổng Quan',id:'sb-overview'},
      {i:"<i class='bx bx-group'></i>",n:'Quản Lý Nhân Viên',id:'sb-emp'},
      {i:"<i class='bx bx-building-house'></i>",n:'Phòng Ban',id:'sb-dept'},
      {i:"<i class='bx bx-medal'></i>",n:'Chức Vụ',id:'sb-pos'}
    ]},
    {label:'TÀI CHÍNH',items:[
      {i:"<i class='bx bx-file'></i>",n:'Hợp Đồng',id:'sb-contract'},
      {i:"<i class='bx bx-money'></i>",n:'Bảng Lương',id:'sb-salary'}
    ]},
    {label:'CÔNG VIỆC',items:[
      {i:"<i class='bx bx-task'></i>",n:'Quản Lý Công Việc',id:'sb-task'},
      {i:"<i class='bx bx-calendar-x'></i>",n:'Nghỉ Phép',id:'sb-leave'},
      {i:"<i class='bx bx-time-five'></i>",n:'Chấm Công',id:'sb-attendance'}
    ]},
    {label:'HỆ THỐNG',items:[
      {i:"<i class='bx bx-bar-chart-alt-2'></i>",n:'Báo Cáo & Thống Kê',id:'sb-report'},
      {i:"<i class='bx bx-history'></i>",n:'Nhật Ký & Thông Báo',id:'sb-log'}
    ]}
  ],
  manager:[
    {label:'CHÍNH',items:[
      {i:"<i class='bx bx-home'></i>",n:'Tổng Quan',id:'sb-overview'},
      {i:"<i class='bx bx-group'></i>",n:'Nhân Viên Nhóm',id:'sb-emp'}
    ]},
    {label:'CÔNG VIỆC',items:[
      {i:"<i class='bx bx-task'></i>",n:'Quản Lý Công Việc',id:'sb-task'},
      {i:"<i class='bx bx-calendar-x'></i>",n:'Duyệt Nghỉ Phép',id:'sb-leave'},
      {i:"<i class='bx bx-time-five'></i>",n:'Chấm Công',id:'sb-attendance'}
    ]}
  ],
  employee:[
    {label:'CÁ NHÂN',items:[
      {i:"<i class='bx bx-home'></i>",n:'Tổng Quan',id:'sb-overview'},
      {i:"<i class='bx bx-clipboard'></i>",n:'Công Việc Của Tôi',id:'sb-task'},
      {i:"<i class='bx bx-calendar-x'></i>",n:'Đơn Nghỉ Phép',id:'sb-leave'},
      {i:"<i class='bx bx-time-five'></i>",n:'Chấm Công',id:'sb-attendance'}
    ]}
  ],
  guest:[
    {label:'KHÁCH',items:[{i:"<i class='bx bx-home'></i>",n:'Trang Chủ',id:'sb-home'}]}
  ]
};

// ── NAVIGATION ────────────────────────────────
function getResolvedUrl(id, fallback) {
  var link = document.getElementById(id);
  return link ? link.href : fallback;
}

function showHome()  { window.location.href = getResolvedUrl('link-home', 'index.html'); }
function goToLogin() { window.location.href = getResolvedUrl('link-login', 'login.html'); }
function goToDash(e) { 
  if (!currentUser) { 
    if(e) e.preventDefault(); 
    window.location.href = getResolvedUrl('link-login', 'login.html'); 
  } else if (!e) {
    window.location.href = getResolvedUrl('link-dash', 'dashboard.html');
  }
}

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(function(b,i){
    b.classList.toggle('active',(i===0&&tab==='login')||(i===1&&tab==='register'));
  });
  document.getElementById('loginForm').classList.toggle('active', tab==='login');
  document.getElementById('registerForm').classList.toggle('active', tab==='register');
}

function updateHomeNav() {
  var chip = document.getElementById('homeUserChip');
  var lb   = document.getElementById('homeLogoutBtn');
  var li   = document.getElementById('navLoginBtn2');
  if (currentUser) {
    if(chip) chip.style.display = 'flex'; 
    if(lb) lb.style.display = 'block';
    if (li) li.style.display = 'none';
    if(document.getElementById('homeUserName')) document.getElementById('homeUserName').textContent = currentUser.name;
    if(document.getElementById('homeUserRole')) document.getElementById('homeUserRole').textContent = currentUser.role.toUpperCase();
  } else {
    if(chip) chip.style.display = 'none'; 
    if(lb) lb.style.display = 'none';
    if (li) li.style.display = 'block';
  }
}

// ── AUTH ──────────────────────────────────────
function doLogin() {
  var name = document.getElementById('loginUsername').value.trim() || 'Người Dùng';
  // Tạm thời dùng admin; sau này sẽ lấy role từ database dựa trên tài khoản đăng nhập
  var role = 'admin';
  currentUser = {name:name, role:role};
  localStorage.setItem('nhom1_user', JSON.stringify(currentUser));
  showToast('Chào mừng ' + name + '! Đang chuyển trang...');
  setTimeout(function(){ window.location.href = getResolvedUrl('link-dash', 'dashboard.html'); }, 800);
}
function enterAsGuest() {
  currentUser = {name:'Khách', role:'guest'};
  localStorage.setItem('nhom1_user', JSON.stringify(currentUser));
  showToast('Đang truy cập với tư cách Khách. Đang chuyển trang...');
  setTimeout(function(){ window.location.href = getResolvedUrl('link-dash', 'dashboard.html'); }, 800);
}
function doRegister() {
  showToast('Tài khoản đã được tạo! Vui lòng đăng nhập.');
  switchTab('login');
}
function doLogout() {
  localStorage.removeItem('nhom1_user');
  showToast('Đã đăng xuất thành công.');
  setTimeout(function(){ window.location.href = getResolvedUrl('link-login', 'login.html'); }, 800);
}

// ── DASHBOARD ─────────────────────────────────
function setupDash(role, name) {
  var dName = document.getElementById('dashUserName');
  if(dName) dName.textContent = name;
  var dRole = document.getElementById('dashUserRole');
  if(dRole) dRole.textContent = role.toUpperCase();
  var dSub = document.getElementById('dashRoleSub');
  if(dSub) dSub.textContent  = '// ' + role.toUpperCase() + ' DASHBOARD';
  var dEye = document.getElementById('dashEyebrow');
  if(dEye) dEye.textContent  = '// ' + roleData[role].title;

  var roles = role==='admin' ? ['admin','manager','employee','guest']
            : role==='manager' ? ['manager','employee']
            : [role];

  var rc = document.getElementById('roleCardsContainer');
  if(rc) rc.innerHTML = roles.map(function(r){
    var d = roleData[r];
    return '<div class="role-card">'
      +'<div class="rc-bar '+d.bar+'"></div>'
      +'<div class="rc-badge '+d.badge+'">'+r.toUpperCase()+'</div>'
      +'<div class="rc-title">'+d.title+'</div>'
      +'<p class="rc-desc">'+d.desc+'</p>'
      +'<ul class="perm-list">'+d.perms.map(function(p){ return '<li>'+p+'</li>'; }).join('')+'</ul>'
      +'</div>';
  }).join('');

  var qg = document.getElementById('quickGrid');
  if(qg) qg.innerHTML = quickItems[role].map(function(item){
    return '<div class="quick-card" onclick="handleQuickAction(\''+item.act+'\')">'
      +'<span class="q-icon">'+item.i+'</span>'
      +'<span class="q-label">'+item.l+'</span>'
      +'</div>';
  }).join('');

  var sbc = document.getElementById('sidebarContent');
  if(sbc) sbc.innerHTML = sidebarMenus[role].map(function(sec){
    return '<div class="sb-section">'
      +'<span class="sb-label">'+sec.label+'</span>'
      +sec.items.map(function(it,idx){
        return '<div class="sb-item'+(idx===0?' active':'')+'" id="'+it.id+'" onclick="handleSidebarClick(this, \''+it.id+'\')">'
          +'<span class="sb-icon">'+it.i+'</span>'+it.n
          +'</div>';
      }).join('')
      +'</div>';
  }).join('');
}

function handleQuickAction(act) {
  if (act === 'home' || act === 'sb-home') showHome();
  else if (act === 'login') goToLogin();
  else if (act.startsWith('sb-')) {
    var el = document.getElementById(act);
    if(el) handleSidebarClick(el, act);
    else showSection(act);
  }
  else showToast('Chức năng đang phát triển!');
}

function handleSidebarClick(el, id) {
  document.querySelectorAll('.sb-item').forEach(function(i){ i.classList.remove('active'); });
  el.classList.add('active');
  showSection(id);
}

function showSection(id) {
  var sections = {
    'sb-overview': 'dashOverview',
    'sb-emp':      'employeeSection',
    'sb-dept':     'deptSection',
    'sb-pos':      'posSection',
    'sb-contract': 'contractSection',
    'sb-salary':   'salarySection',
    'sb-task':     'taskSection',
    'sb-leave':    'leaveSection',
    'sb-attendance': 'attendanceSection',
    'sb-report':   'reportSection',
    'sb-log':      'logSection'
  };
  Object.values(sections).forEach(function(sid) {
    var el = document.getElementById(sid);
    if(el) el.style.display = 'none';
  });
  if (id === 'sb-home') { showHome(); return; }
  var target = sections[id];
  if (target) {
    var el = document.getElementById(target);
    if(el) el.style.display = 'block';
    if(id === 'sb-emp')      renderEmployees();
    if(id === 'sb-dept')     renderDept();
    if(id === 'sb-pos')      renderPos();
    if(id === 'sb-contract') renderContract();
    if(id === 'sb-salary')   renderSalary();
    if(id === 'sb-task')     renderTasks();
    if(id === 'sb-leave')    renderLeave();
    if(id === 'sb-attendance') renderAttendance();
    if(id === 'sb-report')   renderReport();
    if(id === 'sb-log')      renderLog();
  } else {
    var ov = document.getElementById('dashOverview');
    if(ov) ov.style.display = 'block';
    showToast('Chức năng đang phát triển!');
  }
}

function toggleSidebar() {
  var sb = document.getElementById('mainSidebar');
  if (sb) sb.classList.toggle('open');
}

// ── TOAST ─────────────────────────────────────
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(function(t){ t.remove(); });
  var t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function(){ t.remove(); }, 3000);
}

// ── CAROUSEL ──────────────────────────────────
var carouselIndex = 0;
var carouselTotal = 0;
var carouselTimer = null;
var CAROUSEL_DELAY = 5000;

function initCarousel() {
  var track  = document.getElementById('carouselTrack');
  var dotsEl = document.getElementById('carouselDots');
  if (!track || !dotsEl) return;

  carouselTotal = track.children.length;
  carouselIndex = 0;
  dotsEl.innerHTML = '';

  for (var i = 0; i < carouselTotal; i++) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i===0?' active':'');
    dot.setAttribute('aria-label','Slide '+(i+1));
    (function(idx){ dot.addEventListener('click', function(){ carouselGoTo(idx); }); })(i);
    dotsEl.appendChild(dot);
  }
  startCarouselAuto();
}

function carouselGoTo(idx) {
  carouselIndex = (idx + carouselTotal) % carouselTotal;
  var track = document.getElementById('carouselTrack');
  if (track) track.style.transform = 'translateX(-'+(carouselIndex*100)+'%)';
  document.querySelectorAll('.carousel-dot').forEach(function(d,i){
    d.classList.toggle('active', i===carouselIndex);
  });
  resetCarouselAuto();
}
function carouselNext() { carouselGoTo(carouselIndex+1); }
function carouselPrev() { carouselGoTo(carouselIndex-1); }
function startCarouselAuto() { clearInterval(carouselTimer); carouselTimer = setInterval(carouselNext, CAROUSEL_DELAY); }
function resetCarouselAuto() { clearInterval(carouselTimer); carouselTimer = setInterval(carouselNext, CAROUSEL_DELAY); }

// ── EMPLOYEE MANAGEMENT (CRUD) ────────────────
var employees = JSON.parse(localStorage.getItem('nhom1_employees')) || [
  { id: 'NV001', name: 'Nguyễn Văn A', dob: '1995-05-12', gender: 'Nam', phone: '0901234567', email: 'nva@company.com', address: 'Hà Nội', dept: 'PB001', pos: 'CV003', status: 'active' },
  { id: 'NV002', name: 'Trần Thị B', dob: '1998-08-22', gender: 'Nữ', phone: '0987654321', email: 'ttb@company.com', address: 'HCM', dept: 'PB002', pos: 'CV002', status: 'active' }
];

function saveEmployeesData() {
  localStorage.setItem('nhom1_employees', JSON.stringify(employees));
}

function renderEmployees() {
  var tbody = document.getElementById('empTableBody');
  if(!tbody) return;
  tbody.innerHTML = '';
  
  if (employees.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;">Chưa có dữ liệu nhân viên</td></tr>';
    return;
  }

  employees.forEach(function(emp) {
    var statusClass = emp.status === 'active' ? 'active' : (emp.status === 'inactive' ? 'inactive' : '');
    var statusText = emp.status === 'active' ? 'Đang làm việc' : (emp.status === 'inactive' ? 'Đã nghỉ việc' : 'Thử Việc');
    
    var tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${emp.id}</strong></td>
      <td>${emp.name}</td>
      <td>${emp.dob}</td>
      <td>${emp.dept}</td>
      <td>${emp.pos}</td>
      <td>${emp.email}</td>
      <td>${emp.phone}</td>
      <td>
        <button class="action-btn" onclick="editEmployee('${emp.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deleteEmployee('${emp.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openEmpModal() {
  if (currentUser && (currentUser.role === 'guest' || currentUser.role === 'employee')) {
    showToast('[Lỗi] Bạn không có quyền thực hiện thao tác này!');
    return;
  }
  document.getElementById('empId').value = '';
  document.getElementById('empName').value = '';
  document.getElementById('empDob').value = '';
  document.getElementById('empGender').value = 'Nam';
  document.getElementById('empPhone').value = '';
  document.getElementById('empEmail').value = '';
  document.getElementById('empAddress').value = '';
  document.getElementById('empDept').value = 'PB001';
  document.getElementById('empPos').value = 'CV001';
  document.getElementById('empStatus').value = 'active';
  document.getElementById('empModalTitle').textContent = 'Thêm Nhân Viên Mới';
  document.getElementById('empModal').classList.add('active');
}

function closeEmpModal() {
  document.getElementById('empModal').classList.remove('active');
}

function saveEmployee() {
  var id = document.getElementById('empId').value;
  var name = document.getElementById('empName').value.trim();
  var dob = document.getElementById('empDob').value;
  var gender = document.getElementById('empGender').value;
  var phone = document.getElementById('empPhone').value;
  var email = document.getElementById('empEmail').value;
  var address = document.getElementById('empAddress').value;
  var dept = document.getElementById('empDept').value;
  var pos = document.getElementById('empPos').value;
  var status = document.getElementById('empStatus').value;

  if(!name) { showToast('Vui lòng nhập họ tên!'); return; }

  if (id) {
    var index = employees.findIndex(e => e.id === id);
    if(index > -1) {
      employees[index] = { id: id, name: name, dob: dob, gender: gender, phone: phone, email: email, address: address, dept: dept, pos: pos, status: status };
      showToast('Đã cập nhật nhân viên ' + name);
    }
  } else {
    var newId = 'NV' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    employees.push({ id: newId, name: name, dob: dob, gender: gender, phone: phone, email: email, address: address, dept: dept, pos: pos, status: status });
    showToast('Đã thêm nhân viên ' + name);
  }
  
  saveEmployeesData();
  renderEmployees();
  closeEmpModal();
}

function editEmployee(id) {
  if (currentUser && (currentUser.role === 'guest' || currentUser.role === 'employee')) {
    showToast('[Lỗi] Bạn không có quyền thực hiện thao tác này!');
    return;
  }
  var emp = employees.find(e => e.id === id);
  if(!emp) return;
  document.getElementById('empId').value = emp.id;
  document.getElementById('empName').value = emp.name;
  document.getElementById('empDob').value = emp.dob;
  document.getElementById('empGender').value = emp.gender;
  document.getElementById('empPhone').value = emp.phone;
  document.getElementById('empEmail').value = emp.email;
  document.getElementById('empAddress').value = emp.address;
  document.getElementById('empDept').value = emp.dept;
  document.getElementById('empPos').value = emp.pos;
  document.getElementById('empStatus').value = emp.status;
  document.getElementById('empModalTitle').textContent = 'Chỉnh Sửa Nhân Viên';
  document.getElementById('empModal').classList.add('active');
}

function deleteEmployee(id) {
  if (currentUser && currentUser.role !== 'admin') {
    showToast('[Lỗi] Chỉ Admin mới có quyền xóa nhân viên!');
    return;
  }
  if(confirm('Bạn có chắc chắn muốn xóa nhân viên ' + id + ' không?')) {
    employees = employees.filter(e => e.id !== id);
    saveEmployeesData();
    renderEmployees();
    showToast('Đã xóa nhân viên ' + id);
  }
}

// ── EXPORT TO GLOBAL SCOPE (Fix for bundlers) ──
window.showHome = showHome;
window.goToLogin = goToLogin;
window.goToDash = goToDash;
window.doLogout = doLogout;
window.doLogin = doLogin;
window.doRegister = doRegister;
window.enterAsGuest = enterAsGuest;
window.toggleSidebar = toggleSidebar;
window.switchTab = switchTab;
window.handleQuickAction = handleQuickAction;
window.handleSidebarClick = handleSidebarClick;
window.carouselGoTo = carouselGoTo;
window.carouselNext = carouselNext;
window.carouselPrev = carouselPrev;
window.openEmpModal = openEmpModal;
window.closeEmpModal = closeEmpModal;
window.saveEmployee = saveEmployee;
window.editEmployee = editEmployee;
window.deleteEmployee = deleteEmployee;

// ── BOOT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initRobots();
  initCarousel();
  
  var pathname = window.location.pathname.toLowerCase();
  
  // Initialize current page state
  if (pathname.endsWith('dashboard.html') || document.getElementById('dashOverview')) {
    if (!currentUser) {
      window.location.href = getResolvedUrl('link-login', 'login.html');
      return;
    }
    setupDash(currentUser.role, currentUser.name);
    renderEmployees();
  } else if (pathname.endsWith('login.html') || document.getElementById('loginForm')) {
    if (currentUser) {
      window.location.href = getResolvedUrl('link-dash', 'dashboard.html');
    }
  } else {
    updateHomeNav();
  }
});
