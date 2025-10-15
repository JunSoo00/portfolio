(function(){
  const form = document.getElementById('write');
  const submitBtn = document.getElementById('submit');

  form.addEventListener('submit', async function(e){
    e.preventDefault();

    // HTML5 유효성 검사 통과 여부 확인 (불통과 시 기본 브라우저 메시지 표시)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // 허니팟(스팸) 필드가 채워졌다면 그냥 종료
    const gotcha = form.querySelector('input[name="_gotcha"]');
    if (gotcha && gotcha.value) return;

    // 폼 데이터
    const formData = new FormData(form);
    const action = form.getAttribute('action') || 'https://getform.io/f/YOUR_GETFORM_ENDPOINT';

    // 다중 클릭 방지
    submitBtn.disabled = true;

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: formData
      });

      // 성공(2xx)인 경우에만 alert 띄움
      if (res.ok) {
        alert('성공적으로 전송되었습니다. 빠른시일 내 답변드리겠습니다.');
        form.reset();
      }
      // 실패(비2xx)면 아무 동작도 안함(요청하신 대로)
    } catch (err) {
      // 네트워크 오류 등도 사용자에게 알리지 않음
    } finally {
      // 재시도 가능하도록 버튼은 다시 활성화
      submitBtn.disabled = false;
    }
  });
})();
