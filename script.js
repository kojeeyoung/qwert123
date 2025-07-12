document.addEventListener('DOMContentLoaded', () => {
    // 모든 .content-toggle 요소를 가져옵니다.
    const toggleSections = document.querySelectorAll('.content-toggle');

    toggleSections.forEach(section => {
        // 각 섹션 내에서 .toggle-button과 .lesson-content를 찾습니다.
        const toggleButton = section.querySelector('.toggle-button');
        const lessonContent = section.querySelector('.lesson-content');

        // 토글 버튼 클릭 이벤트 리스너를 추가합니다.
        toggleButton.addEventListener('click', () => {
            // .lesson-content 요소에 'active' 클래스를 토글합니다.
            // 'active' 클래스가 있으면 제거하고, 없으면 추가합니다.
            lessonContent.classList.toggle('active');

            // 버튼 텍스트를 변경하여 현재 상태를 나타냅니다.
            if (lessonContent.classList.contains('active')) {
                toggleButton.textContent = '수업 내용 닫기 ▲';
            } else {
                toggleButton.textContent = '수업 내용 보기 ▼';
            }
        });
    });
});