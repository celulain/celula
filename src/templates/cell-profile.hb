<div class="container">
    <div class="row">
        <div class="span8 offset2">
            <h3>Perfil da Célula</h3>

            {{#each content}}
                <div class="row">
                    <div class="span8 offset2">
                        <img src="" class="img-polaroid">
                    </div>
                </div>
            <div class="profile">
                <div class="profile-item">
                    <span class="profile-key"><strong>Líder</strong></span>
                    <span class="profile-value">{{leader}}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Gênero</strong></span>
                    <span class="profile-value">{{gender}}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Faixa etária</strong></span>
                    <span class="profile-value">De {{min_age}} e {{max_age}}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Bairro</strong></span>
                    <span class="profile-value">{{address}}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Discipulador</strong></span>
                    <span class="profile-value"></span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Coordenador</strong></span>
                    <span class="profile-value"></span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Rede</strong></span>
                    <span class="profile-value"></span>
                </div>
                <div class="profile-item">
                    <span class="profile-key"><strong>Congregação</strong></span>
                    <span class="profile-value">{{church}}</span>
                </div>
            </div>
            {{/each}}
        </div>
    </div>
</div>