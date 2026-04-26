// =============================================
// NHÓM 1 HR — modules.js (CRUD Operations)
// =============================================

// --- 1. PHÒNG BAN ---
var depts = JSON.parse(localStorage.getItem('nhom1_depts')) || [
  { id: 'PB001', name: 'Công Nghệ Thông Tin', head: 'NV001', desc: 'Phòng ban công nghệ', count: 10 },
  { id: 'PB002', name: 'Nhân Sự', head: 'NV002', desc: 'Phòng ban quản lý nhân sự', count: 5 }
];
function saveDepts() { localStorage.setItem('nhom1_depts', JSON.stringify(depts)); }
function renderDept() {
  var tbody = document.getElementById('deptTableBody');
  if(!tbody) return;
  tbody.innerHTML = '';
  depts.forEach(d => {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${d.id}</strong></td><td>${d.name}</td><td>${d.head}</td><td>${d.desc}</td><td>${d.count}</td>
      <td>
        <button class="action-btn" onclick="editDept('${d.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deleteDept('${d.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
function openDeptModal() { document.getElementById('deptId').value = ''; document.getElementById('deptName').value = ''; document.getElementById('deptHead').value = ''; document.getElementById('deptDesc').value = ''; document.getElementById('deptModalTitle').textContent = 'Thêm Phòng Ban'; document.getElementById('deptModal').classList.add('active'); }
function closeDeptModal() { document.getElementById('deptModal').classList.remove('active'); }
function saveDept() {
  var id = document.getElementById('deptId').value;
  var name = document.getElementById('deptName').value, head = document.getElementById('deptHead').value, desc = document.getElementById('deptDesc').value;
  if(id) { var idx = depts.findIndex(d=>d.id===id); if(idx>-1) depts[idx] = {id:id, name:name, head:head, desc:desc, count:depts[idx].count}; }
  else { depts.push({id: 'PB00' + (depts.length+1), name:name, head:head, desc:desc, count:0}); }
  saveDepts(); renderDept(); closeDeptModal(); showToast('Lưu phòng ban thành công!');
}
function editDept(id) { var d = depts.find(x=>x.id===id); if(d) { document.getElementById('deptId').value=d.id; document.getElementById('deptName').value=d.name; document.getElementById('deptHead').value=d.head; document.getElementById('deptDesc').value=d.desc; document.getElementById('deptModalTitle').textContent = 'Sửa Phòng Ban'; document.getElementById('deptModal').classList.add('active'); } }
function deleteDept(id) { if(confirm('Xóa phòng ban này?')) { depts = depts.filter(d=>d.id!==id); saveDepts(); renderDept(); showToast('Đã xóa phòng ban!'); } }

// --- 2. CHỨC VỤ ---
var positions = JSON.parse(localStorage.getItem('nhom1_positions')) || [
  { id: 'CV001', name: 'Nhân Viên', coeff: 1.0, desc: 'Nhân viên bình thường', count: 20 },
  { id: 'CV002', name: 'Trưởng Phòng', coeff: 1.5, desc: 'Trưởng phòng ban', count: 4 }
];
function savePosData() { localStorage.setItem('nhom1_positions', JSON.stringify(positions)); }
function renderPos() {
  var tbody = document.getElementById('posTableBody'); if(!tbody) return; tbody.innerHTML = '';
  positions.forEach(p => {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${p.id}</strong></td><td>${p.name}</td><td>${p.coeff}</td><td>${p.desc}</td><td>${p.count}</td>
      <td>
        <button class="action-btn" onclick="editPos('${p.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deletePos('${p.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
function openPosModal() { document.getElementById('posId').value = ''; document.getElementById('posName').value = ''; document.getElementById('posCoeff').value = '1.0'; document.getElementById('posDesc').value = ''; document.getElementById('posModalTitle').textContent = 'Thêm Chức Vụ'; document.getElementById('posModal').classList.add('active'); }
function closePosModal() { document.getElementById('posModal').classList.remove('active'); }
function savePos() {
  var id = document.getElementById('posId').value, name = document.getElementById('posName').value, coeff = document.getElementById('posCoeff').value, desc = document.getElementById('posDesc').value;
  if(id) { var idx = positions.findIndex(x=>x.id===id); if(idx>-1) positions[idx] = {id:id, name:name, coeff:coeff, desc:desc, count:positions[idx].count}; }
  else { positions.push({id: 'CV00' + (positions.length+1), name:name, coeff:coeff, desc:desc, count:0}); }
  savePosData(); renderPos(); closePosModal(); showToast('Lưu chức vụ thành công!');
}
function editPos(id) { var p = positions.find(x=>x.id===id); if(p) { document.getElementById('posId').value=p.id; document.getElementById('posName').value=p.name; document.getElementById('posCoeff').value=p.coeff; document.getElementById('posDesc').value=p.desc; document.getElementById('posModalTitle').textContent = 'Sửa Chức Vụ'; document.getElementById('posModal').classList.add('active'); } }
function deletePos(id) { if(confirm('Xóa chức vụ này?')) { positions = positions.filter(x=>x.id!==id); savePosData(); renderPos(); showToast('Đã xóa chức vụ!'); } }

// --- 3. HỢP ĐỒNG ---
var contracts = JSON.parse(localStorage.getItem('nhom1_contracts')) || [
  { id: 'HD001', empId: 'NV001', type: 'Chính thức', start: '2023-01-01', end: '2026-01-01', salary: '15000000', status: 'Còn hiệu lực' }
];
function saveContracts() { localStorage.setItem('nhom1_contracts', JSON.stringify(contracts)); }
function renderContract() {
  var tbody = document.getElementById('contractTableBody'); if(!tbody) return; tbody.innerHTML = '';
  contracts.forEach(c => {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${c.id}</strong></td><td>${c.empId}</td><td>${c.type}</td><td>${c.start}</td><td>${c.end}</td><td>${Number(c.salary).toLocaleString()} đ</td><td><span class="badge-status ${c.status==='Còn hiệu lực'?'active':'inactive'}">${c.status}</span></td>
      <td>
        <button class="action-btn" onclick="editContract('${c.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deleteContract('${c.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
function openContractModal() { document.getElementById('contractId').value = ''; document.getElementById('contractEmp').value = ''; document.getElementById('contractStart').value = ''; document.getElementById('contractEnd').value = ''; document.getElementById('contractSalary').value = ''; document.getElementById('contractModalTitle').textContent = 'Thêm Hợp Đồng'; document.getElementById('contractModal').classList.add('active'); }
function closeContractModal() { document.getElementById('contractModal').classList.remove('active'); }
function saveContract() {
  var id = document.getElementById('contractId').value, emp = document.getElementById('contractEmp').value, type = document.getElementById('contractType').value, start = document.getElementById('contractStart').value, end = document.getElementById('contractEnd').value, salary = document.getElementById('contractSalary').value, status = document.getElementById('contractStatus').value;
  if(id) { var idx = contracts.findIndex(x=>x.id===id); if(idx>-1) contracts[idx] = {id:id, empId:emp, type:type, start:start, end:end, salary:salary, status:status}; }
  else { contracts.push({id: 'HD00' + (contracts.length+1), empId:emp, type:type, start:start, end:end, salary:salary, status:status}); }
  saveContracts(); renderContract(); closeContractModal(); showToast('Lưu hợp đồng thành công!');
}
function editContract(id) { var c = contracts.find(x=>x.id===id); if(c) { document.getElementById('contractId').value=c.id; document.getElementById('contractEmp').value=c.empId; document.getElementById('contractType').value=c.type; document.getElementById('contractStart').value=c.start; document.getElementById('contractEnd').value=c.end; document.getElementById('contractSalary').value=c.salary; document.getElementById('contractStatus').value=c.status; document.getElementById('contractModalTitle').textContent = 'Sửa Hợp Đồng'; document.getElementById('contractModal').classList.add('active'); } }
function deleteContract(id) { if(confirm('Xóa hợp đồng này?')) { contracts = contracts.filter(x=>x.id!==id); saveContracts(); renderContract(); showToast('Đã xóa hợp đồng!'); } }

// --- 4. BẢNG LƯONG ---
var salaries = JSON.parse(localStorage.getItem('nhom1_salaries')) || [
  { id: 'BL001', empId: 'NV001', month: '2025-04', amount: '18000000', tax: '1200000', insurance: '800000' }
];
function saveSalaries() { localStorage.setItem('nhom1_salaries', JSON.stringify(salaries)); }
function renderSalary() {
  var tbody = document.getElementById('salaryTableBody'); if(!tbody) return; tbody.innerHTML = '';
  var monthFilter = document.getElementById('salaryMonthFilter');
  var filtered = salaries;
  if(monthFilter) filtered = salaries.filter(s => s.month === monthFilter.value);
  filtered.forEach(s => {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${s.id}</strong></td><td>${s.empId}</td><td>${s.month}</td><td>${Number(s.amount).toLocaleString()} đ</td><td>${Number(s.tax).toLocaleString()} đ</td><td>${Number(s.insurance).toLocaleString()} đ</td>
      <td>
        <button class="action-btn" onclick="editSalary('${s.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deleteSalary('${s.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
function openSalaryModal() { document.getElementById('salaryId').value = ''; document.getElementById('salaryEmp').value = ''; document.getElementById('salaryMonth').value = '2025-04'; document.getElementById('salaryAmount').value = ''; document.getElementById('salaryTax').value = ''; document.getElementById('salaryInsurance').value = ''; document.getElementById('salaryModalTitle').textContent = 'Thêm Bảng Lương'; document.getElementById('salaryModal').classList.add('active'); }
function closeSalaryModal() { document.getElementById('salaryModal').classList.remove('active'); }
function saveSalary() {
  var id = document.getElementById('salaryId').value, emp = document.getElementById('salaryEmp').value, month = document.getElementById('salaryMonth').value, amount = document.getElementById('salaryAmount').value, tax = document.getElementById('salaryTax').value, insurance = document.getElementById('salaryInsurance').value;
  if(id) { var idx = salaries.findIndex(x=>x.id===id); if(idx>-1) salaries[idx] = {id:id, empId:emp, month:month, amount:amount, tax:tax, insurance:insurance}; }
  else { salaries.push({id: 'BL00' + (salaries.length+1), empId:emp, month:month, amount:amount, tax:tax, insurance:insurance}); }
  saveSalaries(); renderSalary(); closeSalaryModal(); showToast('Lưu bảng lương thành công!');
}
function editSalary(id) { var s = salaries.find(x=>x.id===id); if(s) { document.getElementById('salaryId').value=s.id; document.getElementById('salaryEmp').value=s.empId; document.getElementById('salaryMonth').value=s.month; document.getElementById('salaryAmount').value=s.amount; document.getElementById('salaryTax').value=s.tax; document.getElementById('salaryInsurance').value=s.insurance; document.getElementById('salaryModalTitle').textContent = 'Sửa Bảng Lương'; document.getElementById('salaryModal').classList.add('active'); } }
function deleteSalary(id) { if(confirm('Xóa bảng lương này?')) { salaries = salaries.filter(x=>x.id!==id); saveSalaries(); renderSalary(); showToast('Đã xóa bảng lương!'); } }

// --- 5. CÔNG VIỆC (TASKS) ---
var tasks = JSON.parse(localStorage.getItem('nhom1_tasks')) || [
  { id: 'T001', name: 'Thiết kế UI', desc: 'Làm giao diện mới', start: '2025-04-01', end: '2025-04-10', priority: 'Cao', status: 'Đang thực hiện', assign: 'NV001' }
];
function saveTasks() { localStorage.setItem('nhom1_tasks', JSON.stringify(tasks)); }
function renderTasks() {
  var kanban = document.getElementById('taskKanban'); if(!kanban) return;
  var cols = {'Chờ xử lý': '', 'Đang thực hiện': '', 'Hoàn thành': ''};
  tasks.forEach(t => {
    var pClass = t.priority === 'Cao' || t.priority === 'Khẩn cấp' ? 'color: red;' : 'color: orange;';
    var html = `<div style="background:var(--panel);padding:16px;border-radius:8px;border:1px solid var(--border2);margin-bottom:12px;box-shadow:var(--shadow);">
      <h4 style="margin-bottom:6px;">${t.name}</h4><p style="font-size:12px;color:var(--text2);margin-bottom:8px;">${t.desc}</p>
      <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">Giao cho: <strong>${t.assign}</strong></div>
      <div style="font-size:11px;margin-bottom:8px;${pClass}">Ưu tiên: ${t.priority}</div>
      <div>
        <button class="action-btn" onclick="editTask('${t.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deleteTask('${t.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </div>
    </div>`;
    if(cols[t.status] !== undefined) cols[t.status] += html;
  });
  kanban.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;">
      <div style="background:var(--bg2);padding:16px;border-radius:12px;"><h3 style="margin-bottom:16px;font-size:14px;text-transform:uppercase;color:var(--text2);">Chờ Xử Lý</h3>${cols['Chờ xử lý']}</div>
      <div style="background:var(--bg2);padding:16px;border-radius:12px;"><h3 style="margin-bottom:16px;font-size:14px;text-transform:uppercase;color:var(--cyan);">Đang Thực Hiện</h3>${cols['Đang thực hiện']}</div>
      <div style="background:var(--bg2);padding:16px;border-radius:12px;"><h3 style="margin-bottom:16px;font-size:14px;text-transform:uppercase;color:var(--green);">Hoàn Thành</h3>${cols['Hoàn thành']}</div>
    </div>
  `;
}
function openTaskModal() { document.getElementById('taskId').value = ''; document.getElementById('taskName').value = ''; document.getElementById('taskDesc').value = ''; document.getElementById('taskStart').value = ''; document.getElementById('taskEnd').value = ''; document.getElementById('taskAssign').value = ''; document.getElementById('taskModalTitle').textContent = 'Tạo Công Việc Mới'; document.getElementById('taskModal').classList.add('active'); }
function closeTaskModal() { document.getElementById('taskModal').classList.remove('active'); }
function saveTask() {
  var id = document.getElementById('taskId').value, name = document.getElementById('taskName').value, desc = document.getElementById('taskDesc').value, start = document.getElementById('taskStart').value, end = document.getElementById('taskEnd').value, priority = document.getElementById('taskPriority').value, status = document.getElementById('taskStatus').value, assign = document.getElementById('taskAssign').value;
  if(id) { var idx = tasks.findIndex(x=>x.id===id); if(idx>-1) tasks[idx] = {id:id, name:name, desc:desc, start:start, end:end, priority:priority, status:status, assign:assign}; }
  else { tasks.push({id: 'T00' + (tasks.length+1), name:name, desc:desc, start:start, end:end, priority:priority, status:status, assign:assign}); }
  saveTasks(); renderTasks(); closeTaskModal(); showToast('Lưu công việc thành công!');
}
function editTask(id) { var t = tasks.find(x=>x.id===id); if(t) { document.getElementById('taskId').value=t.id; document.getElementById('taskName').value=t.name; document.getElementById('taskDesc').value=t.desc; document.getElementById('taskStart').value=t.start; document.getElementById('taskEnd').value=t.end; document.getElementById('taskPriority').value=t.priority; document.getElementById('taskStatus').value=t.status; document.getElementById('taskAssign').value=t.assign; document.getElementById('taskModalTitle').textContent = 'Sửa Công Việc'; document.getElementById('taskModal').classList.add('active'); } }
function deleteTask(id) { if(confirm('Xóa công việc này?')) { tasks = tasks.filter(x=>x.id!==id); saveTasks(); renderTasks(); showToast('Đã xóa công việc!'); } }

// --- 6. NGHỈ PHÉP ---
var leaves = JSON.parse(localStorage.getItem('nhom1_leaves')) || [
  { id: 'NP001', empId: 'NV001', type: 'Nghỉ phép năm', from: '2025-04-10', to: '2025-04-12', reason: 'Nghỉ việc cá nhân', status: 'Đã duyệt' }
];
function saveLeaves() { localStorage.setItem('nhom1_leaves', JSON.stringify(leaves)); }
function renderLeave() {
  var tbody = document.getElementById('leaveTableBody'); if(!tbody) return; tbody.innerHTML = '';
  leaves.forEach(l => {
    var sClass = l.status==='Đã duyệt' ? 'active' : (l.status==='Từ chối'?'inactive':'');
    var tr = document.createElement('tr');
    var approveBtn = l.status==='Chờ duyệt' ? `<button class="action-btn" style="color:var(--green);" onclick="approveLeave('${l.id}')"><i class='bx bx-check'></i> Duyệt</button><button class="action-btn" style="color:red;" onclick="rejectLeave('${l.id}')"><i class='bx bx-x'></i> Từ chối</button>` : '';
    tr.innerHTML = `<td><strong>${l.id}</strong></td><td>${l.empId}</td><td>${l.type}</td><td>${l.from}</td><td>${l.to}</td><td>${l.reason}</td><td><span class="badge-status ${sClass}">${l.status}</span></td>
      <td>
        ${approveBtn}
        <button class="action-btn" onclick="editLeave('${l.id}')"><i class='bx bx-edit-alt'></i> Sửa</button>
        <button class="action-btn delete" onclick="deleteLeave('${l.id}')"><i class='bx bx-trash'></i> Xóa</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
function openLeaveModal() { document.getElementById('leaveId').value = ''; document.getElementById('leaveEmp').value = ''; document.getElementById('leaveFrom').value = ''; document.getElementById('leaveTo').value = ''; document.getElementById('leaveReason').value = ''; document.getElementById('leaveModalTitle').textContent = 'Tạo Đơn Nghỉ Phép'; document.getElementById('leaveModal').classList.add('active'); }
function closeLeaveModal() { document.getElementById('leaveModal').classList.remove('active'); }
function saveLeave() {
  var id = document.getElementById('leaveId').value, emp = document.getElementById('leaveEmp').value, type = document.getElementById('leaveType').value, from = document.getElementById('leaveFrom').value, to = document.getElementById('leaveTo').value, reason = document.getElementById('leaveReason').value;
  var status = 'Chờ duyệt';
  if(id) { var idx = leaves.findIndex(x=>x.id===id); if(idx>-1) leaves[idx] = {id:id, empId:emp, type:type, from:from, to:to, reason:reason, status:leaves[idx].status}; }
  else { leaves.push({id: 'NP00' + (leaves.length+1), empId:emp, type:type, from:from, to:to, reason:reason, status:status}); }
  saveLeaves(); renderLeave(); closeLeaveModal(); showToast('Lưu đơn nghỉ phép thành công!');
}
function editLeave(id) { var l = leaves.find(x=>x.id===id); if(l) { document.getElementById('leaveId').value=l.id; document.getElementById('leaveEmp').value=l.empId; document.getElementById('leaveType').value=l.type; document.getElementById('leaveFrom').value=l.from; document.getElementById('leaveTo').value=l.to; document.getElementById('leaveReason').value=l.reason; document.getElementById('leaveModalTitle').textContent = 'Sửa Đơn Nghỉ Phép'; document.getElementById('leaveModal').classList.add('active'); } }
function deleteLeave(id) { if(confirm('Xóa đơn này?')) { leaves = leaves.filter(x=>x.id!==id); saveLeaves(); renderLeave(); showToast('Đã xóa đơn!'); } }

function approveLeave(id) { var idx = leaves.findIndex(x=>x.id===id); if(idx>-1) { leaves[idx].status = 'Đã duyệt'; saveLeaves(); renderLeave(); addLog('Duyệt nghỉ phép', 'Đã duyệt đơn ' + id); showToast('Đã duyệt đơn nghỉ phép!'); } }
function rejectLeave(id) { var idx = leaves.findIndex(x=>x.id===id); if(idx>-1) { leaves[idx].status = 'Từ chối'; saveLeaves(); renderLeave(); addLog('Từ chối nghỉ phép', 'Đã từ chối đơn ' + id); showToast('Đã từ chối đơn nghỉ phép!'); } }

// --- 7. CHẤM CÔNG ---
var attendance = JSON.parse(localStorage.getItem('nhom1_attendance')) || [];
function saveAttendance() { localStorage.setItem('nhom1_attendance', JSON.stringify(attendance)); }
function doCheckin() {
  var today = new Date().toISOString().slice(0,10);
  var user = JSON.parse(localStorage.getItem('nhom1_user'));
  var name = user ? user.name : 'Người dùng';
  var existing = attendance.find(a => a.date === today && a.empId === name);
  if(existing && existing.checkin) { showToast('Bạn đã check in hôm nay rồi!'); return; }
  attendance.push({ date: today, empId: name, checkin: new Date().toLocaleTimeString('vi-VN'), checkout: '', hours: '', status: 'Đã vào' });
  saveAttendance(); renderAttendance(); addLog('Check In', name + ' check in lúc ' + new Date().toLocaleTimeString('vi-VN')); showToast('Check in thành công!');
}
function doCheckout() {
  var today = new Date().toISOString().slice(0,10);
  var user = JSON.parse(localStorage.getItem('nhom1_user'));
  var name = user ? user.name : 'Người dùng';
  var idx = attendance.findIndex(a => a.date === today && a.empId === name && !a.checkout);
  if(idx === -1) { showToast('Bạn chưa check in hoặc đã check out!'); return; }
  attendance[idx].checkout = new Date().toLocaleTimeString('vi-VN');
  attendance[idx].status = 'Hoàn tất';
  attendance[idx].hours = '8h';
  saveAttendance(); renderAttendance(); addLog('Check Out', name + ' check out lúc ' + new Date().toLocaleTimeString('vi-VN')); showToast('Check out thành công!');
}
function renderAttendance() {
  var tbody = document.getElementById('attendanceTableBody'); if(!tbody) return; tbody.innerHTML = '';
  var todayDiv = document.getElementById('attendanceToday');
  var today = new Date().toISOString().slice(0,10);
  var user = JSON.parse(localStorage.getItem('nhom1_user'));
  var name = user ? user.name : '';
  var todayRec = attendance.find(a => a.date === today && a.empId === name);
  if(todayDiv) todayDiv.innerHTML = `<div style="background:var(--panel);padding:20px;border-radius:12px;border:1px solid var(--border2);box-shadow:var(--shadow);display:flex;gap:24px;align-items:center;"><div><div style="font-size:12px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Hôm nay</div><div style="font-size:24px;font-weight:800;color:var(--cyan);">${today}</div></div><div style="flex:1;"><div style="font-size:13px;">Check In: <strong>${todayRec ? todayRec.checkin : '---'}</strong></div><div style="font-size:13px;">Check Out: <strong>${todayRec ? (todayRec.checkout||'---') : '---'}</strong></div></div></div>`;
  attendance.slice().reverse().forEach(a => {
    var sClass = a.status === 'Hoàn tất' ? 'active' : '';
    var tr = document.createElement('tr');
    tr.innerHTML = `<td>${a.date}</td><td>${a.empId}</td><td>${a.checkin}</td><td>${a.checkout || '---'}</td><td>${a.hours || '---'}</td><td><span class="badge-status ${sClass}">${a.status}</span></td>`;
    tbody.appendChild(tr);
  });
}

// --- 8. BÁO CÁO & THỐNG KÊ ---
function renderReport() {
  var stats = document.getElementById('reportStats'); if(!stats) return;
  var totalEmp = (typeof employees !== 'undefined') ? employees.length : 0;
  var totalDept = depts.length;
  var totalTask = tasks.length;
  var taskDone = tasks.filter(t => t.status === 'Hoàn thành').length;
  var totalLeave = leaves.length;
  var leavePending = leaves.filter(l => l.status === 'Chờ duyệt').length;
  stats.innerHTML = `
    <div class="report-card"><div class="report-num" style="color:var(--cyan);">${totalEmp}</div><div class="report-label">Tổng Nhân Viên</div></div>
    <div class="report-card"><div class="report-num" style="color:var(--purple);">${totalDept}</div><div class="report-label">Phòng Ban</div></div>
    <div class="report-card"><div class="report-num" style="color:var(--green);">${totalTask}</div><div class="report-label">Tổng Công Việc</div></div>
    <div class="report-card"><div class="report-num" style="color:var(--green);">${taskDone}</div><div class="report-label">Hoàn Thành</div></div>
    <div class="report-card"><div class="report-num" style="color:var(--orange);">${totalLeave}</div><div class="report-label">Đơn Nghỉ Phép</div></div>
    <div class="report-card"><div class="report-num" style="color:var(--orange);">${leavePending}</div><div class="report-label">Chờ Duyệt</div></div>
  `;
  var charts = document.getElementById('reportCharts'); if(!charts) return;
  var taskPending = tasks.filter(t => t.status === 'Chờ xử lý').length;
  var taskProgress = tasks.filter(t => t.status === 'Đang thực hiện').length;
  charts.innerHTML = `<div style="background:var(--panel);padding:24px;border-radius:12px;border:1px solid var(--border2);box-shadow:var(--shadow);"><h3 style="margin-bottom:16px;">Tiến Độ Công Việc</h3><div style="display:flex;gap:8px;height:24px;border-radius:8px;overflow:hidden;"><div style="flex:${taskDone};background:var(--green);" title="Hoàn thành: ${taskDone}"></div><div style="flex:${taskProgress};background:var(--cyan);" title="Đang thực hiện: ${taskProgress}"></div><div style="flex:${taskPending};background:var(--text3);" title="Chờ xử lý: ${taskPending}"></div></div><div style="display:flex;gap:16px;margin-top:10px;font-size:12px;"><span><span style="display:inline-block;width:10px;height:10px;background:var(--green);border-radius:2px;"></span> Hoàn thành (${taskDone})</span><span><span style="display:inline-block;width:10px;height:10px;background:var(--cyan);border-radius:2px;"></span> Đang làm (${taskProgress})</span><span><span style="display:inline-block;width:10px;height:10px;background:var(--text3);border-radius:2px;"></span> Chờ (${taskPending})</span></div></div>`;
}

// --- 9. NHẬT KÝ & THÔNG BÁO ---
var activityLog = JSON.parse(localStorage.getItem('nhom1_log')) || [];
var notifications = JSON.parse(localStorage.getItem('nhom1_notify')) || [];
function saveLog() { localStorage.setItem('nhom1_log', JSON.stringify(activityLog)); }
function saveNotify() { localStorage.setItem('nhom1_notify', JSON.stringify(notifications)); }
function addLog(action, detail) {
  var user = JSON.parse(localStorage.getItem('nhom1_user'));
  activityLog.unshift({ time: new Date().toLocaleString('vi-VN'), user: user ? user.name : 'System', action: action, detail: detail });
  if(activityLog.length > 100) activityLog = activityLog.slice(0, 100);
  saveLog();
}
function renderLog() {
  var tbody = document.getElementById('logTableBody'); if(!tbody) return; tbody.innerHTML = '';
  activityLog.slice(0, 50).forEach(l => {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td>${l.time}</td><td>${l.user}</td><td>${l.action}</td><td>${l.detail}</td>`;
    tbody.appendChild(tr);
  });
  var notifyList = document.getElementById('notifyList'); if(!notifyList) return;
  notifyList.innerHTML = notifications.slice(0, 10).map(n => `<div style="background:var(--panel);padding:16px;border-radius:10px;border:1px solid var(--border2);margin-bottom:10px;box-shadow:var(--shadow);"><div style="display:flex;justify-content:space-between;"><strong>${n.title}</strong><span style="font-size:11px;color:var(--text3);">${n.time}</span></div><p style="font-size:13px;color:var(--text2);margin-top:6px;">${n.content}</p></div>`).join('');
}
function openNotifyModal() { document.getElementById('notifyTitle').value = ''; document.getElementById('notifyContent').value = ''; document.getElementById('notifyModal').classList.add('active'); }
function closeNotifyModal() { document.getElementById('notifyModal').classList.remove('active'); }
function sendNotify() {
  var title = document.getElementById('notifyTitle').value, content = document.getElementById('notifyContent').value;
  if(!title) { showToast('Vui lòng nhập tiêu đề!'); return; }
  notifications.unshift({ title: title, content: content, time: new Date().toLocaleString('vi-VN') });
  saveNotify(); addLog('Gửi thông báo', title); renderLog(); closeNotifyModal(); showToast('Đã gửi thông báo!');
}

// --- EXPORT ---
window.openDeptModal = openDeptModal; window.closeDeptModal = closeDeptModal; window.saveDept = saveDept; window.editDept = editDept; window.deleteDept = deleteDept; window.renderDept = renderDept;
window.openPosModal = openPosModal; window.closePosModal = closePosModal; window.savePos = savePos; window.editPos = editPos; window.deletePos = deletePos; window.renderPos = renderPos;
window.openContractModal = openContractModal; window.closeContractModal = closeContractModal; window.saveContract = saveContract; window.editContract = editContract; window.deleteContract = deleteContract; window.renderContract = renderContract;
window.openSalaryModal = openSalaryModal; window.closeSalaryModal = closeSalaryModal; window.saveSalary = saveSalary; window.editSalary = editSalary; window.deleteSalary = deleteSalary; window.renderSalary = renderSalary;
window.openTaskModal = openTaskModal; window.closeTaskModal = closeTaskModal; window.saveTask = saveTask; window.editTask = editTask; window.deleteTask = deleteTask; window.renderTasks = renderTasks;
window.openLeaveModal = openLeaveModal; window.closeLeaveModal = closeLeaveModal; window.saveLeave = saveLeave; window.editLeave = editLeave; window.deleteLeave = deleteLeave; window.renderLeave = renderLeave;
window.approveLeave = approveLeave; window.rejectLeave = rejectLeave;
window.doCheckin = doCheckin; window.doCheckout = doCheckout; window.renderAttendance = renderAttendance;
window.renderReport = renderReport;
window.renderLog = renderLog; window.openNotifyModal = openNotifyModal; window.closeNotifyModal = closeNotifyModal; window.sendNotify = sendNotify; window.addLog = addLog;
